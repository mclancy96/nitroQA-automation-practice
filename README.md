# NitroQA Automation Testing with Playwright
The QA study group is working on the Playwright From Zero to Hero course on Udemy, so as part of my learning I have started to compile test suites inside of Nitro's QA environment. This repository can be used and shared by other QAs looking to practice their skills with PW. Huge thank you to Mike Clancy for helping to develop the setup scripts and config files that are used here.

## Basic Setup

After you've cloned this repo, run the following commands to get everything setup correctly

```bash
npm install
npx playwright install
```

## How Do I Run The Tests?

First, make sure Playwright is installed properly. 

If this is the first time you're using this testing repo (you don't have a session.json file) or you haven't used this repo in a while (your saved cookies are invalid), you will be prompted to log in either using an authenticator (in which case you should have your email and password as environment variables) or simply through a login window. Be sure to close the login window after successfully logging in to save your cookies.

When testing stories and PRs in Power BT, the url of the review env is dynamic. For that reason and to make testing easier, we've setup a script in the [test.sh](./test.sh) file to allow you to enter the url of the review env or enter nothing to default to the QA url. You are also able to enter all of the normal mofications and flags that you would enter if you were just using the `npx playwright test` command (e.g. `--ui` or `path/to/file.spec.ts`). If you want to specify the url, it has to be the first argument, and it has to be a valid url starting with `https://`.

**Basic Formula:** `zsh test.sh [optional url (no valid url defaults to QA)] [any other flags/modifications]`

**Note**

We are using the `zsh` command here to avoid having to grant permissions with `chmod +x test.sh`, but if you're ok with granting the permission, use the `chmod +x test.sh` command and the following commands can be run with just `./test.sh` instead of the `zsh test.sh`

### Examples:

#### Run All Tests in QA

```bash
zsh test.sh
```

#### Run Specific Test in QA

```bash
zsh test.sh tests/specificTest.spec.ts
```

#### Run Specific Test in QA in UI Mode

```bash
zsh test.sh tests/specificTest.spec.ts --ui
```

#### Run Specific Test in Review Env

```bash
zsh test.sh https://pr45298.nitro-web.beta.px.powerapp.cloud tests/specificTest.spec.ts
```

#### Run All Tests in a Specified Review Env URL

```bash
zsh test.sh https://pr45298.nitro-web.beta.px.powerapp.cloud
```

#### Run All Tests in a Specified Review Env URL in UI mode

```bash
zsh test.sh https://pr45298.nitro-web.beta.px.powerapp.cloud --ui
```
