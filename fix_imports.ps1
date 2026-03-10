$files = @(
    "src/components/Layout/Navbar.tsx",
    "src/components/Sections/Languages.tsx",
    "src/data/projects.ts",
    "src/data/skills.ts"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file
        if ($file.EndsWith("Navbar.tsx")) {
            $content[2] = "import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';"
        } elseif ($file.EndsWith("Languages.tsx")) {
            $content[2] = "import { FaFlagUsa } from 'react-icons/fa';"
        } elseif ($file.EndsWith("projects.ts")) {
            $content[0] = "import { FaShieldAlt, FaUsers, FaCloud } from 'react-icons/fa';"
        } elseif ($file.EndsWith("skills.ts")) {
            $content[0] = "import { FaCode, FaServer, FaTools, FaBrain, FaLightbulb, FaRocket, FaUsers, FaCogs, FaChartLine, FaDatabase, FaDocker, FaGitAlt, FaWindows, FaReact, FaCloud, FaPython } from 'react-icons/fa';"
        }
        $content | Set-Content $file
        Write-Host "Fixed: $file"
    }
}
