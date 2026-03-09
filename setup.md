```markdown
# Environment Setup Instructions

This guide outlines the steps required to set up the necessary development tools for the TestLeaf 
Generative AI for QA Engineers course. Please follow the instructions relevant to your operating 
system (Windows or Linux).

## 1. Install Visual Studio (VS)

**Windows Instructions:**
1.  Download the latest Visual Studio Installer from [Visual Studio Official 
Site](https://visualstudio.microsoft.com/downloads/).
2.  Run the installer.
3.  While installing, select the workload **"Desktop development with C++"** (or "Desktop 
development with C++" depending on the specific VS version).
4.  Click Install and wait for the process to complete.

**Linux Instructions (Ubuntu/Debian):**
1.  Install VS Code via the Snap store (easiest method):
    ```bash
    sudo snap install code --classic
    ```
    *Alternatively, you can add the Microsoft repository:*
    ```bash
    sudo apt update
    sudo apt install code
    ```

**Verification:**
*   **Windows:** Search for "Visual Studio" in your Start menu.
*   **Linux:** Open a terminal and type `code --version`.

---

## 2. Create a GitHub Account

1.  Visit [GitHub.com](https://github.com).
2.  Click **Sign up**.
3.  Enter your email address and create a password.
4.  Follow the verification steps to activate your account.

---

## 3. Setup GitHub Copilot

**Note:** GitHub Copilot works best within an IDE like Visual Studio Code. If you are using the 
full Visual Studio, ensure you have the VS Code extension or use the Copilot extension available 
in VS.

1.  In your IDE (VS Code or VS), open the **Extensions** view (Ctrl+Shift+X in VS Code).
2.  Search for **"GitHub Copilot"**.
3.  Click **Install**.
4.  Once installed, click **Sign in to GitHub** in the Copilot side panel or settings.
5.  Authorize the application.

---

## 4. Install Java 21

**Windows Instructions:**
1.  Download the Windows x64 .msi installer from [Adoptium.net (Eclipse Temurin) Java 
21](https://adoptium.net/temurin/releases/?version=21).
2.  Run the installer and follow the default installation steps.

**Linux Instructions (Ubuntu/Debian):**
1.  Update your package list:
    ```bash
    sudo apt update
    ```
2.  Install OpenJDK 21:
    ```bash
    sudo apt install openjdk-21-jdk
    ```
3.  Verify installation:
    ```bash
    java -version
    ```
    *(Output should indicate version 21.x.x)*

---

## 5. Install Node.js LTS

**Windows Instructions:**
1.  Download the Windows installer from [Node.js Official Site](https://nodejs.org/).
2.  Ensure the "LTS" version is selected.
3.  Run the installer and click **Next**, **Install**, **Finish**.

**Linux Instructions (Ubuntu/Debian):**
1.  Add the NodeSource repository for LTS:
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    ```
2.  Install Node.js:
    ```bash
    sudo apt-get install -y nodejs
    ```
3.  Verify installation:
    ```bash
    node -v
    npm -v
    ```

---

## 6. Register on api.testleaf.com

1.  Visit [https://api.testleaf.com](https://api.testleaf.com).
2.  Click on **Register** (or Sign Up).
3.  Use your registered email address to create an account.

---

## 7. Install Postman Desktop App

**Windows Instructions:**
1.  Download the Windows installer from the [Postman Download 
Page](https://www.postman.com/downloads/).
2.  Run the installer.

**Linux Instructions (Ubuntu/Debian):**
1.  Install via Snap (recommended for easy updates):
    ```bash
    sudo snap install postman
    ```
    *Alternatively, download the tar.gz file from the official site and extract it.*

**Verification:**
*   Search for "Postman" in your applications menu or terminal.

