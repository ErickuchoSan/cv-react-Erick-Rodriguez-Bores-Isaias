try {
    const si = require('react-icons/si');
    const imports = [
        'SiTypescript', 'SiTailwindcss', 'SiNextdotjs', 'SiPostgresql',
        'SiNestjs', 'SiVuedotjs', 'SiExpress', 'SiNginx'
    ];

    imports.forEach(icon => {
        console.log(`${icon}: ${!!si[icon]}`);
    });
} catch (e) {
    console.error(e);
}
