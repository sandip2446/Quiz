const quizData = {
    //Chapter 1
    1: [
        // Question 1
    {
        question: "What is the primary purpose of Windows scripting?",
        a: "To create graphical user interfaces",
        b: "To automate tasks at the operating system level",
        c: "To develop web applications",
        d: "To design databases",
        correct: "b"
    },
    // Question 2
    {
        question: "Which file extension is preferred for batch files?",
        a: ".bat",
        b: ".cmd",
        c: ".exe",
        d: ".sh",
        correct: "b"
    },
    // Question 3
    {
        question: "Which command is used to open a command window with administrative privileges?",
        a: "cmd",
        b: "cmd /admin",
        c: "cmd /runas",
        d: "cmd /adminpriv",
        correct: "a"
    },
    // Question 4
    {
        question: "What is the purpose of the 'echo' command in batch files?",
        a: "To create a loop",
        b: "To display messages to the user",
        c: "To delete files",
        d: "To copy files",
        correct: "b"
    },
    // Question 5
    {
        question: "Which command is used to run programs in batch files?",
        a: "run",
        b: "execute",
        c: "start",
        d: "launch",
        correct: "c"
    },
    // Question 6
    {
        question: "What does the 'pause' command do in a batch file?",
        a: "Stops the script permanently",
        b: "Pauses the script until a key is pressed",
        c: "Restarts the script",
        d: "Ends the script",
        correct: "b"
    },
    // Question 7
    {
        question: "How are variables declared in batch files?",
        a: "set variable=value",
        b: "var variable=value",
        c: "declare variable=value",
        d: "define variable=value",
        correct: "a"
    },
    // Question 8
    {
        question: "Which symbol is used to access the value of a variable in batch files?",
        a: "$",
        b: "@",
        c: "%",
        d: "&",
        correct: "c"
    },
    // Question 9
    {
        question: "What is the purpose of the 'if' command in batch files?",
        a: "To create a loop",
        b: "To perform conditional logic",
        c: "To declare variables",
        d: "To display messages",
        correct: "b"
    },
    // Question 10
    {
        question: "Which command is used to check if a file or folder exists in batch files?",
        a: "if exist",
        b: "if fileexists",
        c: "if folderexists",
        d: "if exists",
        correct: "a"
    },
    // Question 11
    {
        question: "How are functions simulated in batch files?",
        a: "Using the 'function' keyword",
        b: "Using the 'def' keyword",
        c: "Using labels and the 'call' command",
        d: "Using the 'func' keyword",
        correct: "c"
    },
    // Question 12
    {
        question: "What is the file extension for PowerShell scripts?",
        a: ".ps",
        b: ".ps1",
        c: ".pscript",
        d: ".psw",
        correct: "b"
    },
    // Question 13
    {
        question: "Which command is used to open PowerShell with administrative privileges?",
        a: "powershell /admin",
        b: "powershell /runas",
        c: "Run as administrator",
        d: "powershell /adminpriv",
        correct: "c"
    },
    // Question 14
    {
        question: "What is the default script execution policy in PowerShell?",
        a: "Unrestricted",
        b: "RemoteSigned",
        c: "AllSigned",
        d: "Restricted",
        correct: "d"
    },
    // Question 15
    {
        question: "Which cmdlet is used to get help in PowerShell?",
        a: "help",
        b: "get-help",
        c: "show-help",
        d: "display-help",
        correct: "b"
    },
    // Question 16
    {
        question: "How are variables declared in PowerShell?",
        a: "var variable=value",
        b: "declare variable=value",
        c: "$variable=value",
        d: "define variable=value",
        correct: "c"
    },
    // Question 17
    {
        question: "Which cmdlet is used to display output in PowerShell?",
        a: "echo",
        b: "print",
        c: "write-output",
        d: "display",
        correct: "c"
    },
    // Question 18
    {
        question: "What is the format for cmdlet names in PowerShell?",
        a: "Verb-Noun",
        b: "Noun-Verb",
        c: "Action-Object",
        d: "Object-Action",
        correct: "a"
    },
    // Question 19
    {
        question: "Which symbol is used for line comments in PowerShell?",
        a: "//",
        b: "#",
        c: "/*",
        d: "--",
        correct: "b"
    },
    // Question 20
    {
        question: "Which command is used to change the script execution policy in PowerShell?",
        a: "Set-ExecutionPolicy",
        b: "Change-ExecutionPolicy",
        c: "Update-ExecutionPolicy",
        d: "Modify-ExecutionPolicy",
        correct: "a"
    },
    // Question 21
    {
        question: "What is the purpose of the 'Write-Host' cmdlet in PowerShell?",
        a: "To create a loop",
        b: "To display messages to the user",
        c: "To delete files",
        d: "To copy files",
        correct: "b"
    },
    // Question 22
    {
        question: "Which cmdlet is used to list all environment variables in PowerShell?",
        a: "Get-Env",
        b: "List-Env",
        c: "Show-Env",
        d: "Get-ChildItem env:",
        correct: "d"
    },
    // Question 23
    {
        question: "How are functions declared in PowerShell?",
        a: "function FunctionName { }",
        b: "def FunctionName { }",
        c: "func FunctionName { }",
        d: "declare FunctionName { }",
        correct: "a"
    },
    // Question 24
    {
        question: "Which cmdlet is used to update the help system in PowerShell?",
        a: "Update-Help",
        b: "Refresh-Help",
        c: "Renew-Help",
        d: "Upgrade-Help",
        correct: "a"
    },
    // Question 25
    {
        question: "What is the purpose of the 'if' statement in PowerShell?",
        a: "To create a loop",
        b: "To perform conditional logic",
        c: "To declare variables",
        d: "To display messages",
        correct: "b"
    },
    // Question 26
    {
        question: "Which operator is used for equality comparison in PowerShell?",
        a: "==",
        b: "===",
        c: "-eq",
        d: "equals",
        correct: "c"
    },
    // Question 27
    {
        question: "Which cmdlet is used to create a new directory in PowerShell?",
        a: "New-Directory",
        b: "Create-Directory",
        c: "New-Item",
        d: "Make-Directory",
        correct: "c"
    },
    // Question 28
    {
        question: "What is the purpose of the 'foreach' loop in PowerShell?",
        a: "To create a loop that iterates over a collection",
        b: "To perform conditional logic",
        c: "To declare variables",
        d: "To display messages",
        correct: "a"
    },
    // Question 29
    {
        question: "Which cmdlet is used to remove a file in PowerShell?",
        a: "Delete-File",
        b: "Remove-Item",
        c: "Erase-File",
        d: "Destroy-File",
        correct: "b"
    },
    // Question 30
    {
        question: "Which cmdlet is used to copy a file in PowerShell?",
        a: "Copy-File",
        b: "Duplicate-File",
        c: "Copy-Item",
        d: "Replicate-File",
        correct: "c"
    },
    // Question 31
    {
        question: "What is the purpose of the 'switch' statement in PowerShell?",
        a: "To create a loop",
        b: "To perform multiple conditional checks",
        c: "To declare variables",
        d: "To display messages",
        correct: "b"
    },
        // Question 32
        {
            question: "Which cmdlet is used to move a file in PowerShell?",
            a: "Move-File",
            b: "Transfer-File",
            c: "Move-Item",
            d: "Shift-File",
            correct: "c"
        },
        // Question 33
        {
            question: "Which cmdlet is used to rename a file in PowerShell?",
            a: "Rename-File",
            b: "Change-FileName",
            c: "Rename-Item",
            d: "Modify-FileName",
            correct: "c"
        },
        // Question 34
        {
            question: "What is the purpose of the 'while' loop in PowerShell?",
            a: "To create a loop that runs indefinitely",
            b: "To create a loop that runs while a condition is true",
            c: "To perform conditional logic",
            d: "To declare variables",
            correct: "b"
        },
        // Question 35
        {
            question: "Which cmdlet is used to stop a running process in PowerShell?",
            a: "Stop-Process",
            b: "End-Process",
            c: "Terminate-Process",
            d: "Kill-Process",
            correct: "a"
        },
        // Question 36
        {
            question: "Which cmdlet is used to get the current date and time in PowerShell?",
            a: "Get-Date",
            b: "Show-Date",
            c: "Display-Date",
            d: "Current-Date",
            correct: "a"
        },
        // Question 37
        {
            question: "What is the purpose of the 'try-catch' block in PowerShell?",
            a: "To create a loop",
            b: "To handle exceptions",
            c: "To declare variables",
            d: "To display messages",
            correct: "b"
        },
        // Question 38
        {
            question: "Which cmdlet is used to import a module in PowerShell?",
            a: "Import-Module",
            b: "Load-Module",
            c: "Add-Module",
            d: "Include-Module",
            correct: "a"
        },
        // Question 39
        {
            question: "Which cmdlet is used to export data to a CSV file in PowerShell?",
            a: "Export-CSV",
            b: "Save-CSV",
            c: "Write-CSV",
            d: "Output-CSV",
            correct: "a"
        },
        // Question 40
        {
            question: "Which cmdlet is used to read data from a CSV file in PowerShell?",
            a: "Read-CSV",
            b: "Import-CSV",
            c: "Load-CSV",
            d: "Get-CSV",
            correct: "b"
        },
        // Question 41
        {
            question: "What is the purpose of the 'foreach-object' cmdlet in PowerShell?",
            a: "To create a loop that iterates over a collection",
            b: "To perform conditional logic",
            c: "To declare variables",
            d: "To display messages",
            correct: "a"
        },
        // Question 42
        {
            question: "Which cmdlet is used to get the properties of an object in PowerShell?",
            a: "Get-Properties",
            b: "Show-Properties",
            c: "Display-Properties",
            d: "Get-Member",
            correct: "d"
        },
        // Question 43
        {
            question: "Which cmdlet is used to start a new process in PowerShell?",
            a: "Start-Process",
            b: "Run-Process",
            c: "Launch-Process",
            d: "Execute-Process",
            correct: "a"
        },
        // Question 44
        {
            question: "Which cmdlet is used to stop a service in PowerShell?",
            a: "Stop-Service",
            b: "End-Service",
            c: "Terminate-Service",
            d: "Kill-Service",
            correct: "a"
        },
        // Question 45
        {
            question: "Which cmdlet is used to get the status of a service in PowerShell?",
            a: "Get-ServiceStatus",
            b: "Show-ServiceStatus",
            c: "Display-ServiceStatus",
            d: "Get-Service",
            correct: "d"
        },
        // Question 46
        {
            question: "Which cmdlet is used to restart a service in PowerShell?",
            a: "Restart-Service",
            b: "Reboot-Service",
            c: "Reload-Service",
            d: "Refresh-Service",
            correct: "a"
        },
        // Question 47
        {
            question: "Which cmdlet is used to remove a module in PowerShell?",
            a: "Remove-Module",
            b: "Delete-Module",
            c: "Unload-Module",
            d: "Erase-Module",
            correct: "a"
        },
        // Question 48
        {
            question: "Which cmdlet is used to clear the screen in PowerShell?",
            a: "Clear-Screen",
            b: "Reset-Screen",
            c: "Clear-Host",
            d: "Clear-Console",
            correct: "c"
        },
        // Question 49
        {
            question: "Which cmdlet is used to get the content of a file in PowerShell?",
            a: "Get-Content",
            b: "Read-Content",
            c: "Load-Content",
            d: "Show-Content",
            correct: "a"
        },
        // Question 50
        {
            question: "Which cmdlet is used to set the execution policy in PowerShell?",
            a: "Set-ExecutionPolicy",
            b: "Change-ExecutionPolicy",
            c: "Update-ExecutionPolicy",
            d: "Modify-ExecutionPolicy",
            correct: "a"
        }
    ],

    //Chapter 2
    2: [
           // Question 1
    {
        question: "Who wrote the original Bourne shell?",
        a: "Linus Torvalds",
        b: "Steve Bourne",
        c: "Richard Stallman",
        d: "Ken Thompson",
        correct: "b"
    },
    // Question 2
    {
        question: "What is the default shell for most Linux distributions?",
        a: "Korn Shell",
        b: "C Shell",
        c: "Bourne Again Shell (bash)",
        d: "Z Shell",
        correct: "c"
    },
    // Question 3
    {
        question: "Which command is used to change file permissions in Linux?",
        a: "chmod",
        b: "chown",
        c: "chgrp",
        d: "chperm",
        correct: "a"
    },
    // Question 4
    {
        question: "What does the 'x' permission indicate for a file?",
        a: "Read",
        b: "Write",
        c: "Execute",
        d: "Delete",
        correct: "c"
    },
    // Question 5
    {
        question: "What is the purpose of the '#!' directive in a shell script?",
        a: "To start a comment",
        b: "To specify the shell to execute the script",
        c: "To declare a variable",
        d: "To end the script",
        correct: "b"
    },
    // Question 6
    {
        question: "Which command is used to make a shell script executable?",
        a: "chmod +x",
        b: "chmod -x",
        c: "chmod +r",
        d: "chmod -r",
        correct: "a"
    },
    // Question 7
    {
        question: "How do you declare a variable in a bash script?",
        a: "var variable=value",
        b: "declare variable=value",
        c: "variable=value",
        d: "set variable=value",
        correct: "c"
    },
    // Question 8
    {
        question: "Which symbol is used to access the value of a variable in bash?",
        a: "$",
        b: "@",
        c: "%",
        d: "&",
        correct: "a"
    },
    // Question 9
    {
        question: "Which command is used to read input from the user in a bash script?",
        a: "input",
        b: "read",
        c: "get",
        d: "fetch",
        correct: "b"
    },
    // Question 10
    {
        question: "What does the '$0' positional variable represent in a bash script?",
        a: "The first command line argument",
        b: "The second command line argument",
        c: "The script name",
        d: "The number of arguments",
        correct: "c"
    },
    // Question 11
    {
        question: "Which environment variable stores the username of the user running the script?",
        a: "$USER",
        b: "$USERNAME",
        c: "$HOSTNAME",
        d: "$LOGNAME",
        correct: "a"
    },
    // Question 12
    {
        question: "Which command is used to store the output of a command in a variable?",
        a: "store",
        b: "save",
        c: "output",
        d: "$(command)",
        correct: "d"
    },
    // Question 13
    {
        question: "What is the purpose of the 'export' keyword in bash?",
        a: "To declare a variable",
        b: "To make a variable available to other scripts",
        c: "To delete a variable",
        d: "To print a variable",
        correct: "b"
    },
    // Question 14
    {
        question: "Which operator is used for addition in bash arithmetic?",
        a: "+",
        b: "-",
        c: "*",
        d: "/",
        correct: "a"
    },
    // Question 15
    {
        question: "Which keyword is used to perform arithmetic operations in bash?",
        a: "calc",
        b: "math",
        c: "let",
        d: "compute",
        correct: "c"
    },
    // Question 16
    {
        question: "How do you find the length of a variable in bash?",
        a: "${length variable}",
        b: "${#variable}",
        c: "${variable length}",
        d: "${variable#}",
        correct: "b"
    },
    // Question 17
    {
        question: "Which keyword is used to concatenate strings in bash?",
        a: "concat",
        b: "append",
        c: "join",
        d: "None of the above",
        correct: "d"
    },
    // Question 18
    {
        question: "What is the basic structure of an 'if' statement in bash?",
        a: "if (condition) { statements }",
        b: "if [ condition ] then statements fi",
        c: "if condition then statements end",
        d: "if condition { statements } end",
        correct: "b"
    },
    // Question 19
    {
        question: "Which operator is used to compare strings for equality in bash?",
        a: "==",
        b: "===",
        c: "=",
        d: "eq",
        correct: "c"
    },
    // Question 20
    {
        question: "Which operator is used to compare integers for equality in bash?",
        a: "==",
        b: "===",
        c: "=",
        d: "-eq",
        correct: "d"
    },
    // Question 21
    {
        question: "Which operator is used to check if a file exists in bash?",
        a: "-f",
        b: "-d",
        c: "-e",
        d: "-s",
        correct: "c"
    },
    // Question 22
    {
        question: "Which operator is used to check if a file is a directory in bash?",
        a: "-f",
        b: "-d",
        c: "-e",
        d: "-s",
        correct: "b"
    },
    // Question 23
    {
        question: "Which operator is used to check if a file is readable in bash?",
        a: "-r",
        b: "-w",
        c: "-x",
        d: "-e",
        correct: "a"
    },
    // Question 24
    {
        question: "Which operator is used to check if a file is writable in bash?",
        a: "-r",
        b: "-w",
        c: "-x",
        d: "-e",
        correct: "b"
    },
    // Question 25
    {
        question: "Which operator is used to check if a file is executable in bash?",
        a: "-r",
        b: "-w",
        c: "-x",
        d: "-e",
        correct: "c"
    },
    // Question 26
    {
        question: "What is the purpose of the '&&' operator in bash?",
        a: "Logical AND",
        b: "Logical OR",
        c: "Logical NOT",
        d: "Logical XOR",
        correct: "a"
    },
    // Question 27
    {
        question: "What is the purpose of the '||' operator in bash?",
        a: "Logical AND",
        b: "Logical OR",
        c: "Logical NOT",
        d: "Logical XOR",
        correct: "b"
    },
    // Question 28
    {
        question: "What is the purpose of the '!' operator in bash?",
        a: "Logical AND",
        b: "Logical OR",
        c: "Logical NOT",
        d: "Logical XOR",
        correct: "c"
    },
    // Question 29
    {
        question: "What is the basic structure of a 'while' loop in bash?",
        a: "while (condition) { statements }",
        b: "while [ condition ] do statements done",
        c: "while condition do statements end",
        d: "while condition { statements } end",
        correct: "b"
    },
    // Question 30
    {
        question: "What is the basic structure of an 'until' loop in bash?",
        a: "until (condition) { statements }",
        b: "until [ condition ] do statements done",
        c: "until condition do statements end",
        d: "until condition { statements } end",
        correct: "b"
    },
    // Question 31
    {
        question: "What is the basic structure of a 'for' loop in bash?",
        a: "for (variable in list) { statements }",
        b: "for variable in list do statements done",
        c: "for variable in list do statements end",
        d: "for variable in list { statements } end",
        correct: "b"
    },
    // Question 32
    {
        question: "Which keyword is used to exit a loop early in bash?",
        a: "exit",
        b: "break",
        c: "continue",
        d: "stop",
        correct: "b"
    },
       // Question 33
       {
        question: "Which keyword is used to skip the rest of the statements in the current iteration of a loop in bash?",
        a: "exit",
        b: "break",
        c: "continue",
        d: "stop",
        correct: "c"
    },
    // Question 34
    {
        question: "Which command is used to display a message in bash?",
        a: "print",
        b: "echo",
        c: "display",
        d: "show",
        correct: "b"
    },
    // Question 35
    {
        question: "Which command is used to list files and directories in bash?",
        a: "ls",
        b: "dir",
        c: "list",
        d: "show",
        correct: "a"
    },
    // Question 36
    {
        question: "Which command is used to change the current directory in bash?",
        a: "cd",
        b: "chdir",
        c: "change",
        d: "move",
        correct: "a"
    },
    // Question 37
    {
        question: "Which command is used to create a new directory in bash?",
        a: "mkdir",
        b: "newdir",
        c: "createdir",
        d: "makedir",
        correct: "a"
    },
    // Question 38
    {
        question: "Which command is used to remove a file in bash?",
        a: "rm",
        b: "delete",
        c: "remove",
        d: "erase",
        correct: "a"
    },
    // Question 39
    {
        question: "Which command is used to copy files in bash?",
        a: "cp",
        b: "copy",
        c: "duplicate",
        d: "replicate",
        correct: "a"
    },
    // Question 40
    {
        question: "Which command is used to move files in bash?",
        a: "mv",
        b: "move",
        c: "transfer",
        d: "shift",
        correct: "a"
    },
    // Question 41
    {
        question: "Which command is used to display the current working directory in bash?",
        a: "pwd",
        b: "cwd",
        c: "dir",
        d: "showdir",
        correct: "a"
    },
    // Question 42
    {
        question: "Which command is used to display the contents of a file in bash?",
        a: "cat",
        b: "show",
        c: "display",
        d: "view",
        correct: "a"
    },
    // Question 43
    {
        question: "Which command is used to search for a pattern in a file in bash?",
        a: "find",
        b: "search",
        c: "grep",
        d: "locate",
        correct: "c"
    },
    // Question 44
    {
        question: "Which command is used to display the first few lines of a file in bash?",
        a: "head",
        b: "top",
        c: "start",
        d: "begin",
        correct: "a"
    },
    // Question 45
    {
        question: "Which command is used to display the last few lines of a file in bash?",
        a: "tail",
        b: "end",
        c: "finish",
        d: "bottom",
        correct: "a"
    },
    // Question 46
    {
        question: "Which command is used to count the number of lines, words, and characters in a file in bash?",
        a: "count",
        b: "wc",
        c: "lines",
        d: "words",
        correct: "b"
    },
    // Question 47
    {
        question: "Which command is used to change file ownership in bash?",
        a: "chown",
        b: "chperm",
        c: "chgrp",
        d: "chmod",
        correct: "a"
    },
    // Question 48
    {
        question: "Which command is used to change file group ownership in bash?",
        a: "chown",
        b: "chperm",
        c: "chgrp",
        d: "chmod",
        correct: "c"
    },
    // Question 49
    {
        question: "Which command is used to display the manual pages for a command in bash?",
        a: "help",
        b: "man",
        c: "info",
        d: "guide",
        correct: "b"
    },
    // Question 50
    {
        question: "Which command is used to display the current date and time in bash?",
        a: "date",
        b: "time",
        c: "datetime",
        d: "now",
        correct: "a"
    }
    ],
    //Chapter 3
    3: [
         // Question 1
    {
        question: "What is information security primarily concerned with?",
        a: "Creating new software",
        b: "Protecting information on devices",
        c: "Designing hardware",
        d: "Developing websites",
        correct: "b"
    },
    // Question 2
    {
        question: "Which of the following is NOT a basic information security protection?",
        a: "Confidentiality",
        b: "Integrity",
        c: "Availability",
        d: "Usability",
        correct: "d"
    },
    // Question 3
    {
        question: "What does confidentiality ensure in information security?",
        a: "Data is accessible to unauthorized users",
        b: "Data is correct and unaltered",
        c: "Only approved individuals can access important information",
        d: "Data is always available",
        correct: "c"
    },
    // Question 4
    {
        question: "What is the purpose of authentication in information security?",
        a: "To provide permissions to specific resources",
        b: "To track events",
        c: "To ensure the individual is who they claim to be",
        d: "To encrypt data",
        correct: "c"
    },
    // Question 5
    {
        question: "Which of the following is a problem encountered with information security?",
        a: "Universally connected devices",
        b: "Decreased speed of attacks",
        c: "Limited availability of attack tools",
        d: "Slow detection of vulnerabilities",
        correct: "a"
    },
    // Question 6
    {
        question: "What is a threat in information security?",
        a: "A flaw or weakness that allows a threat agent to bypass security",
        b: "An item that has value",
        c: "Events or actions that represent a danger to information assets",
        d: "The means by which an attack can occur",
        correct: "c"
    },
    // Question 7
    {
        question: "What is a vulnerability in information security?",
        a: "A person who carries out a threat",
        b: "A flaw or weakness that allows a threat agent to bypass security",
        c: "The probability that a security threat happens",
        d: "A situation that involves exposure to a security threat",
        correct: "b"
    },
    // Question 8
    {
        question: "What is risk avoidance?",
        a: "Identifying the risk and avoiding any activity that exposes information to that risk",
        b: "Identifying the risk but taking no steps to avoid it",
        c: "Identifying the risk and taking steps to minimize it",
        d: "Transferring the risk to a third party",
        correct: "a"
    },
    // Question 9
    {
        question: "Who are black hat hackers?",
        a: "Those who attack for personal gain or to inflict damage",
        b: "Ethical hackers who report vulnerabilities",
        c: "Hackers who look for vulnerabilities without prior consent",
        d: "Government-sponsored attackers",
        correct: "a"
    },
    // Question 10
    {
        question: "What is the primary objective of cybercriminals?",
        a: "To cause disruption and panic",
        b: "To protest or retaliate",
        c: "To generate income by exploiting vulnerabilities",
        d: "To spy on citizens",
        correct: "c"
    },
    // Question 11
    {
        question: "What is the first step in the Cyber Kill Chain?",
        a: "Weaponization",
        b: "Delivery",
        c: "Reconnaissance",
        d: "Exploitation",
        correct: "c"
    },
    // Question 12
    {
        question: "What is the purpose of the weaponization step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To install the threat vector on the target system",
        correct: "b"
    },
    // Question 13
    {
        question: "What is the purpose of the delivery step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To install the threat vector on the target system",
        correct: "c"
    },
    // Question 14
    {
        question: "What is the purpose of the exploitation step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To trigger the attacker's exploit",
        correct: "d"
    },
    // Question 15
    {
        question: "What is the purpose of the installation step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To install the threat vector on the target system",
        correct: "d"
    },
    // Question 16
    {
        question: "What is the purpose of the command and control step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To remotely control the compromised system",
        correct: "d"
    },
    // Question 17
    {
        question: "What is the purpose of the actions on objectives step in the Cyber Kill Chain?",
        a: "To probe for information about the system",
        b: "To create an exploit and package it into a deliverable payload",
        c: "To transmit the threat vector to the target",
        d: "To achieve the attacker's original objectives",
        correct: "d"
    },
    // Question 18
    {
        question: "What is the principle of layering in information security?",
        a: "Limiting access to information",
        b: "Using different security layers to protect against attacks",
        c: "Hiding information to make attacks more difficult",
        d: "Keeping security systems simple",
        correct: "b"
    },
    // Question 19
    {
        question: "What is the principle of limiting in information security?",
        a: "Using different security layers to protect against attacks",
        b: "Limiting access to information to reduce threats",
        c: "Hiding information to make attacks more difficult",
        d: "Keeping security systems simple",
        correct: "b"
    },
    // Question 20
    {
        question: "What is the principle of diversity in information security?",
        a: "Using different security layers to protect against attacks",
        b: "Limiting access to information to reduce threats",
        c: "Using different security measures for each layer",
        d: "Keeping security systems simple",
        correct: "c"
    },
    // Question 21
    {
        question: "What is the principle of obscurity in information security?",
        a: "Using different security layers to protect against attacks",
        b: "Limiting access to information to reduce threats",
        c: "Hiding information to make attacks more difficult",
        d: "Keeping security systems simple",
        correct: "c"
    },
    // Question 22
    {
        question: "What is the principle of simplicity in information security?",
        a: "Using different security layers to protect against attacks",
        b: "Limiting access to information to reduce threats",
        c: "Hiding information to make attacks more difficult",
        d: "Keeping security systems simple",
        correct: "d"
    },
    // Question 23
    {
        question: "Which organization publishes the NIST Cybersecurity Framework?",
        a: "ETSI",
        b: "ISO/IEC",
        c: "ISF",
        d: "NIST",
        correct: "d"
    },
    // Question 24
    {
        question: "What is malware?",
        a: "Software that enters a computer system without the user's knowledge and performs harmful actions",
        b: "A legitimate program that performs useful tasks",
        c: "A type of hardware used in networking",
        d: "A security protocol for encrypting data",
        correct: "a"
    },
    // Question 25
    {
        question: "What is a virus in the context of malware?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "An executable program that masquerades as a legitimate program",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "b"
    },
     // Question 26
     {
        question: "What is a worm in the context of malware?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "An executable program that masquerades as a legitimate program",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "a"
    },
    // Question 27
    {
        question: "What is a Trojan in the context of malware?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "An executable program that masquerades as a legitimate program",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "c"
    },
    // Question 28
    {
        question: "What is ransomware?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "An executable program that masquerades as a legitimate program",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "d"
    },
    // Question 29
    {
        question: "What is crypto-malware?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "Software that encrypts all files on a device and demands a fee for decryption",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "c"
    },
    // Question 30
    {
        question: "What is a rootkit?",
        a: "A program that uses a computer network to replicate",
        b: "Malicious computer code that reproduces itself on the same computer",
        c: "Software that hides its presence or the presence of other malware",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "c"
    },
    // Question 31
    {
        question: "What is spyware?",
        a: "Software that tracks user activities without their consent",
        b: "Software that encrypts all files on a device and demands a fee for decryption",
        c: "Software that hides its presence or the presence of other malware",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "a"
    },
    // Question 32
    {
        question: "What is adware?",
        a: "Software that tracks user activities without their consent",
        b: "Software that delivers unwanted advertising content",
        c: "Software that hides its presence or the presence of other malware",
        d: "Software that prevents a user's device from functioning until a fee is paid",
        correct: "b"
    },
    // Question 33
    {
        question: "What is a logic bomb?",
        a: "Software that tracks user activities without their consent",
        b: "Software that delivers unwanted advertising content",
        c: "Software that hides its presence or the presence of other malware",
        d: "Malicious code that triggers a harmful action when a specific event occurs",
        correct: "d"
    },
    // Question 34
    {
        question: "What is a backdoor?",
        a: "Software that tracks user activities without their consent",
        b: "Software that delivers unwanted advertising content",
        c: "Software that hides its presence or the presence of other malware",
        d: "Software that provides unauthorized access to a computer or network",
        correct: "d"
    },
    // Question 35
    {
        question: "What is a bot (or zombie)?",
        a: "Software that tracks user activities without their consent",
        b: "Software that delivers unwanted advertising content",
        c: "Software that hides its presence or the presence of other malware",
        d: "Software that allows a computer to be remotely controlled by an attacker",
        correct: "d"
    },
    // Question 36
    {
        question: "What is social engineering?",
        a: "A method of gathering information by exploiting human weaknesses",
        b: "A type of malware that spreads through networks",
        c: "A security protocol for encrypting data",
        d: "A technique for developing secure software",
        correct: "a"
    },
    // Question 37
    {
        question: "What is phishing?",
        a: "A method of gathering information by exploiting human weaknesses",
        b: "A type of malware that spreads through networks",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "d"
    },
    // Question 38
    {
        question: "What is spear phishing?",
        a: "A method of gathering information by exploiting human weaknesses",
        b: "A type of malware that spreads through networks",
        c: "A targeted phishing attack aimed at specific individuals",
        d: "A technique for developing secure software",
        correct: "c"
    },
    // Question 39
    {
        question: "What is whaling?",
        a: "A method of gathering information by exploiting human weaknesses",
        b: "A type of malware that spreads through networks",
        c: "A phishing attack targeting wealthy individuals or senior executives",
        d: "A technique for developing secure software",
        correct: "c"
    },
    // Question 40
    {
        question: "What is vishing?",
        a: "A method of gathering information by exploiting human weaknesses",
        b: "A type of malware that spreads through networks",
        c: "A phishing attack conducted over the phone",
        d: "A technique for developing secure software",
        correct: "c"
    },
    // Question 41
    {
        question: "What is spam?",
        a: "Unsolicited email sent to a large number of recipients",
        b: "A type of malware that spreads through networks",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "a"
    },
    // Question 42
    {
        question: "What is a hoax in the context of social engineering?",
        a: "Unsolicited email sent to a large number of recipients",
        b: "A false warning claiming to come from an authority figure",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "b"
    },
    // Question 43
    {
        question: "What is a watering hole attack?",
        a: "An attack on a specific group of individuals using a common resource",
        b: "A type of malware that spreads through networks",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "a"
    },
    // Question 44
    {
        question: "What is dumpster diving?",
        a: "Digging through trash to find useful information for an attack",
        b: "A type of malware that spreads through networks",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "a"
    },
    // Question 45
    {
        question: "What is tailgating?",
        a: "Digging through trash to find useful information for an attack",
        b: "Following an individual into a protected area without their knowledge",
        c: "A technique for developing secure software",
        d: "A method of tricking users into providing sensitive information",
        correct: "b"
    },
    // Question 46
    {
        question: "What is shoulder surfing?",
        a: "Digging through trash to find useful information for an attack",
        b: "Following an individual into a protected area without their knowledge",
        c: "Watching an individual enter a security code or password",
        d: "A method of tricking users into providing sensitive information",
        correct: "c"
    },
    // Question 47
    {
        question: "What is the primary objective of hacktivists?",
        a: "To generate income by exploiting vulnerabilities",
        b: "To cause disruption and panic",
        c: "To protest or retaliate",
        d: "To spy on citizens",
        correct: "c"
    },
    // Question 48
    {
        question: "What is the primary objective of state-sponsored attackers?",
        a: "To generate income by exploiting vulnerabilities",
        b: "To cause disruption and panic",
        c: "To protest or retaliate",
        d: "To spy on citizens or disrupt foreign governments",
        correct: "d"
    },
    // Question 49
    {
        question: "What is the primary objective of cyberterrorists?",
        a: "To generate income by exploiting vulnerabilities",
        b: "To cause disruption and panic",
        c: "To protest or retaliate",
        d: "To spy on citizens",
        correct: "b"
    },
    // Question 50
    {
        question: "What is the primary objective of insiders in the context of information security?",
        a: "To generate income by exploiting vulnerabilities",
        b: "To cause disruption and panic",
        c: "To retaliate against their employer or steal sensitive information",
        d: "To protest or retaliate",
        correct: "c"
    }
    ],

    //chapter 4
    4: [
        
            // Question 1
            {
                question: "What is cryptography primarily used for?",
                a: "Creating new software",
                b: "Scrambling information so that only authorized individuals can use it",
                c: "Designing hardware",
                d: "Developing websites",
                correct: "b"
            },
            // Question 2
            {
                question: "What is encryption?",
                a: "The process of changing scrambled data back to its original state",
                b: "The process of changing the original data into scrambled data",
                c: "The process of hiding the existence of data",
                d: "The process of generating random numbers",
                correct: "b"
            },
            // Question 3
            {
                question: "What is ciphertext?",
                a: "Unencrypted data that is the input for encryption",
                b: "The scrambled and unusable output of encryption",
                c: "Usable data that is transmitted or stored",
                d: "The process of changing scrambled data back to its original state",
                correct: "b"
            },
            // Question 4
            {
                question: "What is steganography?",
                a: "The process of changing the original data into scrambled data",
                b: "The process of hiding the existence of data",
                c: "The process of generating random numbers",
                d: "The process of changing scrambled data back to its original state",
                correct: "b"
            },
            // Question 5
            {
                question: "What is a key in cryptography?",
                a: "A mathematical value entered into a cipher to produce the ciphertext",
                b: "A process of hiding the existence of data",
                c: "A process of generating random numbers",
                d: "A process of changing scrambled data back to its original state",
                correct: "a"
            },
            // Question 6
            {
                question: "What is the purpose of a hash algorithm?",
                a: "To encrypt data",
                b: "To create a digital fingerprint for a set of data",
                c: "To hide the existence of data",
                d: "To generate random numbers",
                correct: "b"
            },
            // Question 7
            {
                question: "Which of the following is a common hash algorithm?",
                a: "DES",
                b: "AES",
                c: "MD5",
                d: "RSA",
                correct: "c"
            },
            // Question 8
            {
                question: "What is a symmetric cryptographic algorithm?",
                a: "An algorithm that uses two keys for encryption and decryption",
                b: "An algorithm that uses the same key for encryption and decryption",
                c: "An algorithm that creates a digital fingerprint for a set of data",
                d: "An algorithm that hides the existence of data",
                correct: "b"
            },
            // Question 9
            {
                question: "Which of the following is a common symmetric cryptographic algorithm?",
                a: "RSA",
                b: "ECC",
                c: "AES",
                d: "DSA",
                correct: "c"
            },
            // Question 10
            {
                question: "What is an asymmetric cryptographic algorithm?",
                a: "An algorithm that uses the same key for encryption and decryption",
                b: "An algorithm that creates a digital fingerprint for a set of data",
                c: "An algorithm that hides the existence of data",
                d: "An algorithm that uses two keys for encryption and decryption",
                correct: "d"
            },
            // Question 11
            {
                question: "Which of the following is a common asymmetric cryptographic algorithm?",
                a: "DES",
                b: "AES",
                c: "RSA",
                d: "Blowfish",
                correct: "c"
            },
            // Question 12
            {
                question: "What is the purpose of a digital certificate?",
                a: "To encrypt data",
                b: "To associate a user's identity with a public key",
                c: "To hide the existence of data",
                d: "To generate random numbers",
                correct: "b"
            },
            // Question 13
            {
                question: "What is the purpose of the Secure Sockets Layer (SSL) protocol?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To access remote computers",
                d: "To secure web servers and browsers",
                correct: "d"
            },
            // Question 14
            {
                question: "What is the purpose of the Transport Layer Security (TLS) protocol?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To access remote computers",
                d: "To secure web servers and browsers",
                correct: "d"
            },
            // Question 15
            {
                question: "What is the purpose of the Secure Shell (SSH) protocol?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To access remote computers",
                d: "To secure web servers and browsers",
                correct: "c"
            },
            // Question 16
            {
                question: "What is the purpose of the Hypertext Transport Protocol Secure (HTTPS)?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To secure web servers and browsers",
                d: "To access remote computers",
                correct: "c"
            },
            // Question 17
            {
                question: "What is the purpose of the Secure/Multipurpose Internet Mail Extensions (S/MIME) protocol?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To secure web servers and browsers",
                d: "To encrypt email",
                correct: "d"
            },
            // Question 18
            {
                question: "What is the purpose of the Secure Real-time Transport Protocol (SRTP)?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To secure web servers and browsers",
                d: "To access remote computers",
                correct: "a"
            },
            // Question 19
            {
                question: "What is the purpose of the IP Security (IPsec) protocol?",
                a: "To encrypt audio and video communications",
                b: "To secure IP communications",
                c: "To secure web servers and browsers",
                d: "To access remote computers",
                correct: "b"
            },
            // Question 20
            {
                question: "What is a Man-in-the-Middle (MITM) attack?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that installs malware on a system",
                d: "An attack that floods a server with requests",
                correct: "b"
            },
            // Question 21
            {
                question: "What is a Man-in-the-Browser (MITB) attack?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that occurs between the web browser and the underlying operating system",
                d: "An attack that floods a server with requests",
                correct: "c"
            },
            // Question 22
            {
                question: "What is a replay attack?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that stores captured data for later use",
                d: "An attack that floods a server with requests",
                correct: "c"
            },
            // Question 23
            {
                question: "What is ARP poisoning?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that substitutes a valid DNS address with an invalid one",
                d: "An attack that assigns the attacker's MAC address to the victim's IP address",
                correct: "d"
            },
            // Question 24
            {
                question: "What is DNS poisoning?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that substitutes a valid DNS address with an invalid one",
                d: "An attack that assigns the attacker's MAC address to the victim's IP address",
                correct: "c"
            },
            // Question 25
            {
                question: "What is privilege escalation?",
                a: "An attack that encrypts data",
                b: "An attack that intercepts and modifies data between two entities",
                c: "An attack that exploits a vulnerability to gain access to restricted resources",
                d: "An attack that floods a server with requests",
                correct: "c"
            },
             // Question 26
    {
        question: "What is a Denial of Service (DoS) attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that overwhelms a server with false requests",
        d: "An attack that installs malware on a system",
        correct: "c"
    },
    // Question 27
    {
        question: "What is a Cross-Site Scripting (XSS) attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that uses user input to execute malicious scripts",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 28
    {
        question: "What is a Cross-Site Request Forgery (XSRF) attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that uses the user's web browser settings to impersonate the user",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 29
    {
        question: "What is an injection attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that introduces new input to exploit a vulnerability",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 30
    {
        question: "What is session hijacking?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that impersonates the user by using their session token",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 31
    {
        question: "What is URL hijacking (or typo squatting)?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that registers domain names similar to legitimate ones",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 32
    {
        question: "What is domain hijacking?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that tricks the domain registry process to register the attacker's IP",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 33
    {
        question: "What is clickjacking?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that tricks a user into clicking a link that is not what it appears to be",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 34
    {
        question: "What is a buffer overflow attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that stores data in memory beyond the allocated boundaries",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 35
    {
        question: "What is an integer overflow attack?",
        a: "An attack that encrypts data",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that changes the value of a variable to something outside the intended range",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 36
    {
        question: "What is malvertising?",
        a: "Malicious advertising or a poisoned ad attack",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that stores data in memory beyond the allocated boundaries",
        d: "An attack that floods a server with requests",
        correct: "a"
    },
    // Question 37
    {
        question: "What is ad fraud?",
        a: "Malicious advertising or a poisoned ad attack",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that manipulates the advertising system for financial gain",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 38
    {
        question: "What is a scripting code vulnerability?",
        a: "A vulnerability in the script attached to a web page",
        b: "An attack that intercepts and modifies data between two entities",
        c: "An attack that stores data in memory beyond the allocated boundaries",
        d: "An attack that floods a server with requests",
        correct: "a"
    },
    // Question 39
    {
        question: "What is an extension vulnerability?",
        a: "A vulnerability in the script attached to a web page",
        b: "A vulnerability in the browser extension that has wider access privileges",
        c: "An attack that stores data in memory beyond the allocated boundaries",
        d: "An attack that floods a server with requests",
        correct: "b"
    },
    // Question 40
    {
        question: "What is a plug-in vulnerability?",
        a: "A vulnerability in the script attached to a web page",
        b: "A vulnerability in the browser extension that has wider access privileges",
        c: "A vulnerability in a third-party binary library that runs outside of the browser",
        d: "An attack that floods a server with requests",
        correct: "c"
    },
    // Question 41
    {
        question: "What is an add-on vulnerability?",
        a: "A vulnerability in the script attached to a web page",
        b: "A vulnerability in the browser extension that has wider access privileges",
        c: "A vulnerability in a third-party binary library that runs outside of the browser",
        d: "A vulnerability in the add-on that adds functionality to the entire browser",
        correct: "d"
    },
    // Question 42
    {
        question: "What is the purpose of a Trusted Platform Module (TPM)?",
        a: "To provide cryptographic services on a computer's motherboard",
        b: "To encrypt data on a USB device",
        c: "To secure IP communications",
        d: "To access remote computers",
        correct: "a"
    },
    // Question 43
    {
        question: "What is the purpose of a Hardware Security Module (HSM)?",
        a: "To provide cryptographic services on a computer's motherboard",
        b: "To encrypt data on a USB device",
        c: "To secure IP communications",
        d: "To provide secure cryptographic processing and data backup",
        correct: "d"
    },
    // Question 44
    {
        question: "What is the purpose of Full Disk Encryption (FDE)?",
        a: "To encrypt data on a USB device",
        b: "To encrypt the entire drive to prevent unauthorized access",
        c: "To secure IP communications",
        d: "To access remote computers",
        correct: "b"
    },
    // Question 45
    {
        question: "What is the purpose of Pretty Good Privacy (PGP)?",
        a: "To encrypt data on a USB device",
        b: "To encrypt email using both symmetric and asymmetric encryption",
        c: "To secure IP communications",
        d: "To access remote computers",
        correct: "b"
    },
    // Question 46
    {
        question: "What is the purpose of a digital signature?",
        a: "To encrypt data",
        b: "To verify the identity of the sender",
        c: "To hide the existence of data",
        d: "To generate random numbers",
        correct: "b"
    },
    // Question 47
    {
        question: "What is the purpose of a Public Key Infrastructure (PKI)?",
        a: "To manage the public keys used in digital certificates",
        b: "To encrypt data on a USB device",
        c: "To secure IP communications",
        d: "To access remote computers",
        correct: "a"
    },
    // Question 48
    {
        question: "What is a known ciphertext attack?",
        a: "An attack that uses statistical tools to discover patterns in ciphertext",
        b: "An attack that forces the system to use a less secure mode of encryption",
        c: "An attack that uses an algorithm with a known security weakness",
        d: "An attack that improperly implements cryptographic algorithms",
        correct: "a"
    },
    // Question 49
    {
        question: "What is a downgrade attack?",
        a: "An attack that uses statistical tools to discover patterns in ciphertext",
        b: "An attack that forces the system to use a less secure mode of encryption",
        c: "An attack that uses an algorithm with a known security weakness",
        d: "An attack that improperly implements cryptographic algorithms",
        correct: "b"
    },
     // Question 50
     {
        question: "What is a collision attack?",
        a: "An attack that uses statistical tools to discover patterns in ciphertext",
        b: "An attack that forces the system to use a less secure mode of encryption",
        c: "An attack that finds two input strings of a hash function that produce the same hash result",
        d: "An attack that improperly implements cryptographic algorithms",
        correct: "c"
    }
    ],

    //Chapter 5
    5: [
         // Question 1
    {
        question: "Why should booting from USB or optical drives be disabled on a publicly accessible computer?",
        a: "To prevent unauthorized software installation",
        b: "To speed up the boot process",
        c: "To save power",
        d: "To improve network performance",
        correct: "a"
    },
    // Question 2
    {
        question: "What is the purpose of setting a BIOS/UEFI password?",
        a: "To prevent unauthorized access to the operating system",
        b: "To speed up the boot process",
        c: "To save power",
        d: "To improve network performance",
        correct: "a"
    },
    // Question 3
    {
        question: "What is GRUB in the context of Linux?",
        a: "A type of malware",
        b: "A Linux bootloader",
        c: "A package manager",
        d: "A firewall tool",
        correct: "b"
    },
    // Question 4
    {
        question: "What are patches in the context of Linux updates?",
        a: "Software fixes for installed software",
        b: "New versions of the operating system",
        c: "Security updates",
        d: "Kernel updates",
        correct: "a"
    },
    // Question 5
    {
        question: "What is the purpose of security updates in Linux?",
        a: "To add new features",
        b: "To fix security vulnerabilities",
        c: "To improve performance",
        d: "To update the kernel",
        correct: "b"
    },
    // Question 6
    {
        question: "Which package manager is used by Red Hat based distributions?",
        a: "APT",
        b: "YUM",
        c: "DPKG",
        d: "Pacman",
        correct: "b"
    },
    // Question 7
    {
        question: "Which command is used to update packages in a Debian-based Linux distribution?",
        a: "yum update",
        b: "dnf update",
        c: "apt update",
        d: "rpm update",
        correct: "c"
    },
    // Question 8
    {
        question: "What is PAM in the context of Linux security?",
        a: "A package manager",
        b: "A bootloader",
        c: "A firewall tool",
        d: "Pluggable Authentication Modules",
        correct: "d"
    },
    // Question 9
    {
        question: "What is the purpose of the chmod command in Linux?",
        a: "To change file permissions",
        b: "To update the system",
        c: "To manage user accounts",
        d: "To start the boot process",
        correct: "a"
    },
    // Question 10
    {
        question: "What is SELinux?",
        a: "A package manager",
        b: "A bootloader",
        c: "A security program for Red Hat based distributions",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 11
    {
        question: "What is the purpose of a firewall in a network?",
        a: "To encrypt data",
        b: "To filter incoming and outgoing network traffic",
        c: "To manage user accounts",
        d: "To detect malware",
        correct: "b"
    },
    // Question 12
    {
        question: "Which port number is used by the HTTP protocol?",
        a: "21",
        b: "22",
        c: "80",
        d: "443",
        correct: "c"
    },
    // Question 13
    {
        question: "What is Netfilter in the context of Linux?",
        a: "A package manager",
        b: "A bootloader",
        c: "A firewall system",
        d: "A security program",
        correct: "c"
    },
    // Question 14
    {
        question: "What is the purpose of the iptables command in Linux?",
        a: "To change file permissions",
        b: "To update the system",
        c: "To manage user accounts",
        d: "To configure the firewall",
        correct: "d"
    },
    // Question 15
    {
        question: "What is firewalld?",
        a: "A package manager",
        b: "A bootloader",
        c: "A firewall tool for Red Hat based distributions",
        d: "A security program",
        correct: "c"
    },
    // Question 16
    {
        question: "What is UFW in the context of Linux?",
        a: "A package manager",
        b: "A bootloader",
        c: "An interface to iptables",
        d: "A security program",
        correct: "c"
    },
    // Question 17
    {
        question: "What are TCP Wrappers?",
        a: "A package manager",
        b: "A bootloader",
        c: "Access control lists for networking services",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 18
    {
        question: "What is the purpose of the /etc/hosts.allow file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To control access to networking services",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 19
    {
        question: "What is dm_crypt in the context of Linux?",
        a: "A package manager",
        b: "A bootloader",
        c: "A kernel module for encryption",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 20
    {
        question: "What is LUKS?",
        a: "A package manager",
        b: "A bootloader",
        c: "A command line front-end for dm_crypt",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 21
    {
        question: "What is PGP used for?",
        a: "Encrypting files and directories",
        b: "Managing user accounts",
        c: "Updating the system",
        d: "Starting the boot process",
        correct: "a"
    },
    // Question 22
    {
        question: "What is GPG?",
        a: "A package manager",
        b: "A bootloader",
        c: "An implementation of OpenPGP",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 23
    {
        question: "What is Seahorse?",
        a: "A package manager",
        b: "A bootloader",
        c: "A GNOME desktop application for managing encryption keys",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 24
    {
        question: "What is HTTPS?",
        a: "A package manager",
        b: "A bootloader",
        c: "An encrypted version of HTTP",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 25
    {
        question: "What is SFTP?",
        a: "A package manager",
        b: "A bootloader",
        c: "An encrypted version of FTP",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 26
    {
        question: "What is the purpose of IPSec?",
        a: "To encrypt data at the IP layer",
        b: "To manage user accounts",
        c: "To update the system",
        d: "To start the boot process",
        correct: "a"
    },
    // Question 27
    {
        question: "What is SSH used for?",
        a: "Encrypting files and directories",
        b: "Managing user accounts",
        c: "Secure remote access",
        d: "Starting the boot process",
        correct: "c"
    },
    // Question 28
    {
        question: "What is ClamAV?",
        a: "A package manager",
        b: "A bootloader",
        c: "An open source antivirus and anti-malware tool",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 29
    {
        question: "What is a rootkit?",
        a: "A package manager",
        b: "A bootloader",
        c: "A set of programs that gain and maintain root access",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 30
    {
        question: "What is Lynis?",
        a: "A package manager",
        b: "A bootloader",
        c: "A security auditing and vulnerability detection tool",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 31
    {
        question: "What is Bastille?",
        a: "A package manager",
        b: "A bootloader",
        c: "A hardening program for increased security",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 32
    {
        question: "What is Nessus?",
        a: "A package manager",
        b: "A bootloader",
        c: "A vulnerability scanning tool",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 33
    {
        question: "What is an Intrusion Detection System (IDS)?",
        a: "A package manager",
        b: "A bootloader",
        c: "A system that detects malicious activity on a network",
        d: "A firewall tool",
        correct: "c"
    },
    // Question 34
    {
        question: "What is a signature-based IDS?",
        a: "An IDS that uses rules or patterns of known malicious traffic",
        b: "An IDS that views the activity that generated the traffic as more important",
        c: "An IDS that encrypts data",
        d: "An IDS that manages user accounts",
        correct: "a"
    },
    // Question 35
    {
        question: "What is an anomaly-based IDS?",
        a: "An IDS that uses rules or patterns of known malicious traffic",
        b: "An IDS that views the activity that generated the traffic as more important",
        c: "An IDS that encrypts data",
        d: "An IDS that manages user accounts",
        correct: "b"
    },
    // Question 36
    {
        question: "What is the purpose of the shadow password file (/etc/shadow)?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To store password policies and options",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 37
    {
        question: "What is the purpose of the sudo command in Linux?",
        a: "To change file permissions",
        b: "To update the system",
        c: "To execute commands with superuser privileges",
        d: "To start the boot process",
        correct: "c"
    },
    // Question 38
    {
        question: "What is the purpose of the /etc/pam.d directory?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To store PAM configuration files",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 39
    {
        question: "What is the purpose of the /etc/pam.conf file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To store PAM configuration settings",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 40
    {
        question: "What is the purpose of the /etc/hosts.deny file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To control access to networking services",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 41
    {
        question: "What is the purpose of the /etc/hosts file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To map hostnames to IP addresses",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 42
    {
        question: "What is the purpose of the /etc/passwd file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To store password policies and options",
        d: "To manage file permissions",
        correct: "a"
    },
    // Question 43
    {
        question: "What is the purpose of the /etc/group file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To store group information",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 44
    {
        question: "What is the purpose of the /etc/fstab file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To define how disk partitions are mounted",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 45
    {
        question: "What is the purpose of the /etc/mtab file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To list currently mounted filesystems",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 46
    {
        question: "What is the purpose of the /etc/resolv.conf file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To configure DNS servers",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 47
    {
        question: "What is the purpose of the /etc/network/interfaces file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To configure network interfaces",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 48
    {
        question: "What is the purpose of the /etc/sysctl.conf file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To configure kernel parameters",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 49
    {
        question: "What is the purpose of the /etc/crontab file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To schedule periodic tasks",
        d: "To manage file permissions",
        correct: "c"
    },
    // Question 50
    {
        question: "What is the purpose of the /etc/rc.local file?",
        a: "To store user accounts",
        b: "To store firewall rules",
        c: "To execute commands at system startup",
        d: "To manage file permissions",
        correct: "c"
    }
    ]
};

// Variables
let currentChapter = 1;
let currentQuestion = 0;
let score = 0;
let chapterScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
let userAnswers = { 1: [], 2: [], 3: [], 4: [], 5: [] };
let incorrectQuestions = [];

const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const retryChapterSelect = document.getElementById('retryChapterSelect');

// Functions
function loadChapter(chapter) {
    currentChapter = chapter;
    currentQuestion = 0;
    score = 0;
    result.innerHTML = '';
    highlightChapter();
    loadQuestion();
}

function highlightChapter() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`chapter${i}`).classList.remove('active');
    }
    document.getElementById(`chapter${currentChapter}`).classList.add('active');
}

function loadQuestion() {
    const q = quizData[currentChapter][currentQuestion];
    quiz.innerHTML = `
        <div class="question">
            <h3>${currentQuestion + 1}. ${q.question}</h3>
            <div class="answers">
                <button onclick="checkAnswer('${q.correct}', 'a', this)">${q.a}</button>
                <button onclick="checkAnswer('${q.correct}', 'b', this)">${q.b}</button>
                <button onclick="checkAnswer('${q.correct}', 'c', this)">${q.c}</button>
                <button onclick="checkAnswer('${q.correct}', 'd', this)">${q.d}</button>
            </div>
        </div>
    `;
    updateNavigation();
    if (userAnswers[currentChapter][currentQuestion] !== undefined) {
        highlightPreviousAnswer();
    }
}

function checkAnswer(correct, selected, element) {
    userAnswers[currentChapter][currentQuestion] = selected;
    if (selected === correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('incorrect');
        highlightCorrectAnswer(correct, element.parentElement);
        incorrectQuestions.push({ chapter: currentChapter, question: currentQuestion });
    }
    disableButtons(element.parentElement);
}

function highlightPreviousAnswer() {
    const selected = userAnswers[currentChapter][currentQuestion];
    const buttons = quiz.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.innerText === quizData[currentChapter][currentQuestion][selected]) {
            button.classList.add(selected === quizData[currentChapter][currentQuestion].correct ? 'correct' : 'incorrect');
        }
    });
    disableButtons(quiz.querySelector('.answers'));
}

function highlightCorrectAnswer(correct, parent) {
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.innerText === quizData[currentChapter][currentQuestion][correct]) {
            button.classList.add('correct');
        }
    });
}

function disableButtons(parent) {
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButtons(parent) {
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData[currentChapter].length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function submitQuiz() {
    chapterScores[currentChapter] = score;
    quiz.innerHTML = '';
    showResult(); // Call the showResult function here
    document.getElementById('retryBtn').style.display = 'block'; // Show Retry Incorrect button

    // Transfer incorrect questions to retry section
    showRetryOptions();

    // Clear quiz state
   //clearQuiz();
}

function clearQuiz() {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;
    userAnswers[currentChapter] = [];

    // Clear result display
    result.innerHTML = '';

    // Remove 'correct' and 'incorrect' classes from all buttons
    const buttons = quiz.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
    });

    // Reload the current chapter to reset the quiz display
    loadChapter(currentChapter);
}
    

function showRetryOptions() {
    retryChapterSelect.style.display = 'block';
    retryChapterSelect.innerHTML = '<option value="">Select Chapter</option>';
    const chaptersWithIncorrect = [...new Set(incorrectQuestions.map(q => q.chapter))];
    chaptersWithIncorrect.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter;
        option.textContent = `Chapter ${chapter}`;
        retryChapterSelect.appendChild(option);
    });
}

function retryIncorrectChapter() {
    const selectedChapter = retryChapterSelect.value;
    if (selectedChapter) {
        const chapterIncorrectQuestions = incorrectQuestions.filter(q => q.chapter == selectedChapter);
        if (chapterIncorrectQuestions.length > 0) {
            incorrectQuestions = chapterIncorrectQuestions;
            const incorrect = incorrectQuestions.shift();
            currentChapter = incorrect.chapter;
            currentQuestion = incorrect.question;
            loadQuestion();
            enableButtons(quiz.querySelector('.answers')); // Enable buttons for retry
        } else {
            alert('No incorrect questions to retry.');
        }
    }
}

function retryIncorrect() {
    if (incorrectQuestions.length > 0) {
        const incorrect = incorrectQuestions.shift();
        currentChapter = incorrect.chapter;
        currentQuestion = incorrect.question;
        loadQuestion();
        enableButtons(quiz.querySelector('.answers')); // Enable buttons for retry
    } else {
        alert('No incorrect questions to retry.');
    }
}

function updateNavigation() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = currentQuestion === quizData[currentChapter].length - 1;
}

function showResult() {
    result.innerHTML = `
        <p class="current-chapter">Current Chapter ${currentChapter}: You scored ${score} out of ${quizData[currentChapter].length}</p>
        <p>Chapter 1: You scored ${chapterScores[1]} out of ${quizData[1].length}</p>
        <p>Chapter 2: You scored ${chapterScores[2]} out of ${quizData[2].length}</p>
        <p>Chapter 3: You scored ${chapterScores[3]} out of ${quizData[3].length}</p>
        <p>Chapter 4: You scored ${chapterScores[4]} out of ${quizData[4].length}</p>
        <p>Chapter 5: You scored ${chapterScores[5]} out of ${quizData[5].length}</p>
    `;
}

// Initialize
loadChapter(1); // Load the first chapter by default