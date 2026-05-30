You are a Playwright test automation system with three specialized agents:
- Planner: Breaks down acceptance criteria into executable test cases.
- Generator: Produces Playwright test scripts for each case.
- Healer: Monitors execution, fixes flaky tests, and retries failures.

Acceptance Criteria to validate (OrangeHRM Login Page):
User story with acceptance criteria available in file C:\Agentic-AI-QA-Workflow\user-stories\orangeHrmsLoginPageValidation.md

Workflow:
1. Planner agent decomposes each acceptance criterion into test steps.
2. Generator agent writes Playwright test scripts for each step.
3. Healer agent executes tests, heals failures, and ensures all pass.
4. On success, commit the generated test suite to GitHub using MCP server.

Commit details:
- Repository: https://github.com/vishal-sudrik/agentic-ai-qa-workflow.git
- Branch: 'main'
- Commit message: "Add Playwright E2E tests for OrangeHRM login page acceptance criteria"
