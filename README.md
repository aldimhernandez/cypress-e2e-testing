# 🚀 cypress-e2e-testing

**cypress-e2e-testing** is a project that aims to demonstrate advanced knowledge in Cypress, covering a wide range of test scenarios. It includes tests for **UI**, **API**, **file download and validation**, and **iframe interaction**.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [CI / CD](#running-tests)
- [Contributions](#contributing)
- [Project State](#proyect-state)

## ✨ Features

- **UI Testing**: Comprehensive tests for user interface components.
- **API Testing**: Validation of API endpoints and responses.
- **File Download and Validation**: Tests for downloading and validating files.
- **Iframe Interaction**: Handling and testing interactions within iframes.

## 🛠️ Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/aldimhernandez/cypress-e2e-testing.git
   cd cypress-e2e-testing
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## 🚀 Usage

To run the Cypress tests, you can use the following commands:

- **Run all tests**:

  ```sh
  npm run test
  ```

- **Run tests with specific tags** (e.g., `@form`):
  ```sh
  npx cypress run --env TAGS='@form' --browser chrome
  ```

## 🧪 CI / CD

This project uses GitHub Actions for Continuous Integration (CI). The CI workflow is defined in `.github/workflows/ci.yml` and runs the tests on every push and pull request to the `master` branch.

To manually trigger the CI workflow, you can use the `workflow_dispatch` event in GitHub Actions.

## 🤝 Contributions

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## Project State: 🚧 In Progress (Work in progress) 🚧

## ✅ Done

- **Form Feature:** Validation, input handling, and submission logic
- **CI/CD Integration:** Tests automatically run via GitHub Actions on every push
- **Cucumber Report Implementation:** BDD reporting using Cypress + Cucumber

## 🚧 Pending (Coming Soon)

- **Iframe Feature:** Tests involving embedded content and interactions within iframes
- **API Feature:** Validating backend responses and mocking requests
- **Download File Validation:** Automating file download tests and content checks

---

Made with ❤️ by [Aldi Hernandez](https://github.com/aldimhernandez)
