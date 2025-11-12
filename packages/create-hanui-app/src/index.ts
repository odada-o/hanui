#!/usr/bin/env node

import { program } from 'commander';
import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Options {
  packageManager?: 'npm' | 'yarn' | 'pnpm';
}

program
  .name('create-hanui-app')
  .description('Create a new HANUI app with KRDS design system')
  .argument('[project-directory]', 'Directory to create the project in')
  .option(
    '-p, --package-manager <pm>',
    'Package manager to use (npm, yarn, pnpm)',
    'pnpm'
  )
  .action(async (projectDirectory: string | undefined, options: Options) => {
    console.log();
    console.log(chalk.cyan.bold('  Create HANUI App'));
    console.log(chalk.gray('  KRDS 디자인 시스템 기반 Next.js 프로젝트 생성'));
    console.log();

    let projectName: string = projectDirectory || '';

    if (!projectName) {
      const response = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'Project name:',
        initial: 'my-hanui-app',
        validate: (value) => {
          if (!value) return 'Project name is required';
          if (!/^[a-z0-9-]+$/.test(value)) {
            return 'Project name can only contain lowercase letters, numbers, and hyphens';
          }
          return true;
        },
      });

      if (!response.projectName) {
        console.log(chalk.red('✖') + ' Project creation cancelled');
        process.exit(1);
      }

      projectName = response.projectName;
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      console.log();
      console.log(chalk.red(`✖ Directory "${projectName}" already exists`));
      process.exit(1);
    }

    // Ask for package manager if not specified
    let packageManager = options.packageManager || 'pnpm';

    if (!options.packageManager) {
      const pmResponse = await prompts({
        type: 'select',
        name: 'packageManager',
        message: 'Which package manager would you like to use?',
        choices: [
          { title: 'pnpm (recommended)', value: 'pnpm' },
          { title: 'npm', value: 'npm' },
          { title: 'yarn', value: 'yarn' },
        ],
        initial: 0,
      });

      if (!pmResponse.packageManager) {
        console.log(chalk.red('✖') + ' Project creation cancelled');
        process.exit(1);
      }

      packageManager = pmResponse.packageManager;
    }

    console.log();
    console.log(
      chalk.cyan(`Creating a new HANUI app in ${chalk.green(projectPath)}`)
    );
    console.log();

    try {
      // Create project directory
      const spinner = ora('Creating project directory...').start();
      fs.mkdirSync(projectPath, { recursive: true });
      spinner.succeed('Project directory created');

      // Copy template files
      spinner.start('Copying template files...');
      const templatePath = path.resolve(__dirname, '..', 'template');
      copyDirectory(templatePath, projectPath);
      spinner.succeed('Template files copied');

      // Update package.json with project name
      spinner.start('Updating package.json...');
      const packageJsonPath = path.join(projectPath, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      packageJson.name = projectName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      spinner.succeed('package.json updated');

      // Install dependencies
      spinner.start(`Installing dependencies with ${packageManager}...`);

      const installCommand =
        packageManager === 'yarn' ? 'yarn' : `${packageManager} install`;

      execSync(installCommand, {
        cwd: projectPath,
        stdio: 'ignore',
      });

      spinner.succeed('Dependencies installed');

      // Success message
      console.log();
      console.log(
        chalk.green.bold('✔ Success!') +
          ' Created ' +
          chalk.cyan(projectName) +
          ' at ' +
          chalk.gray(projectPath)
      );
      console.log();
      console.log('Inside that directory, you can run several commands:');
      console.log();
      console.log(
        chalk.cyan(
          `  ${packageManager} ${packageManager === 'npm' ? 'run ' : ''}dev`
        )
      );
      console.log('    Starts the development server.');
      console.log();
      console.log(
        chalk.cyan(
          `  ${packageManager} ${packageManager === 'npm' ? 'run ' : ''}build`
        )
      );
      console.log('    Builds the app for production.');
      console.log();
      console.log(
        chalk.cyan(
          `  ${packageManager} ${packageManager === 'npm' ? 'run ' : ''}start`
        )
      );
      console.log('    Runs the built app in production mode.');
      console.log();
      console.log('We suggest that you begin by typing:');
      console.log();
      console.log(chalk.cyan('  cd'), projectName);
      console.log(
        chalk.cyan(
          `  ${packageManager} ${packageManager === 'npm' ? 'run ' : ''}dev`
        )
      );
      console.log();
      console.log('Happy coding! 🎨');
      console.log();
    } catch (error) {
      console.log();
      console.log(chalk.red('✖ Error creating project:'));
      console.error(error);
      process.exit(1);
    }
  });

function copyDirectory(src: string, dest: string) {
  // Create destination directory
  fs.mkdirSync(dest, { recursive: true });

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

program.parse();
