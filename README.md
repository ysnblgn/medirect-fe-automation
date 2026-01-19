# 🎭 Playwright UI Test Automation Project

This repository contains a **Playwright (TypeScript) UI automation solution** built as part of a technical assessment.
It validates a key end-to-end user journey and demonstrates how to run tests locally and in a **GitHub Actions** CI pipeline (including a daily schedule).

---

## 🚀 Project Goal and Scope

The primary objective of this project is to demonstrate a maintainable and CI-ready UI automation approach using Playwright.

Scope includes:

1. Building UI tests using **Playwright Test Runner**
2. Using a **Page Object Model (POM)** structure for clean test design
3. Centralizing shared setup via **fixtures**
4. Running tests locally and in CI
5. Publishing **Playwright HTML reports** as pipeline artifacts
6. Scheduling the pipeline to run daily

---

## ✨ Technologies and Architecture

| Area                 | Technology / Tool       | Description                                      |
| -------------------- | ----------------------- | ------------------------------------------------ |
| Programming Language | TypeScript              | Test implementation language                     |
| UI Automation        | Playwright              | Browser automation and assertions                |
| Test Runner          | Playwright Test         | Parallel execution, retries, built-in reporter   |
| Design Pattern       | Page Object Model (POM) | Encapsulates locators and page actions           |
| Shared Setup         | Fixtures                | Reusable test setup (navigation, cookies, pages) |
| CI/CD                | GitHub Actions          | Automated execution and scheduling               |
| Reporting            | Playwright HTML Report  | Test results in a readable HTML report           |
| Package Manager      | npm                     | Dependency management and scripts                |

---

## 📁 Project Structure

This section reflects the **actual folder structure and naming** used in this repository.

```
.
├── .github/
│   └── workflows/
│       └── ci.yml                   # GitHub Actions pipeline
├── tests/
│   ├── fixtures/
│   │   └── pages.ts                 # Custom fixture setup
│   ├── pages/
│   │   ├── DetailsPage.ts           # Page Object: Details page
│   │   └── SearchPage.ts            # Page Object: Search page
│   ├── specs/
│   │   └── equities-search.spec.ts  # Test specs
│   ├── types/
│   │   └── securities.ts            # Shared types
│   └── utils/
│       └── cookies.ts               # Cookie helpers
├── playwright.config.ts             # Playwright configuration
├── package.json
├── package-lock.json
└── .gitignore
```


## 🛠️ Setup and Execution

### Prerequisites

- Node.js 24.13.0
- npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd <repo-folder>
```

2. Install dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

---

## 🚀 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific spec file

```bash
npx playwright test tests/specs/equities-search.spec.ts
```

### Run in headed mode

```bash
npx playwright test --headed
```

### View the HTML report

```bash
npx playwright show-report
```

---

## 🧱 Test Design Details

### Page Object Model (POM)

- Page-specific locators and actions are encapsulated in `tests/pages`
- Tests focus on verifying business flows rather than UI implementation details

### Fixtures

Shared setup is centralized in `tests/fixtures/pages.ts`, typically covering:

- Page object initialization
- Navigation
- Cookie acceptance
- Reusable setup steps to keep specs clean

### Stability in CI

The configuration is designed for CI execution with practical debugging support:

- Screenshots on failure
- Traces on retry (optional)
- HTML reporting for each run

---

## 🔄 CI/CD Integration with GitHub Actions

A GitHub Actions workflow is defined in:

- `.github/workflows/ci.yml`

### What the pipeline does

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Installs Playwright browsers
5. Runs the Playwright tests
6. Uploads the HTML report as artifacts

### How to run it manually

1. Go to the **Actions** tab in GitHub
2. Select the workflow
3. Click **Run workflow**
4. Start the job

### Daily scheduled run

The workflow is configured with a cron schedule to run daily, ensuring continuous validation.

---

## 📊 Test Reporting

After each pipeline run:

- A **Playwright HTML report** is generated
- The report is uploaded as a GitHub Actions **artifact** so it can be downloaded and reviewed

---

## ✅ Conclusion

This project demonstrates a complete UI automation workflow using Playwright:

- Maintainable test design (POM + fixtures)
- Repeatable local execution
- CI execution with scheduling and reporting
