// Cursor trail effect
document.addEventListener('mousemove', function(e) {
    const operators = ['+', '-', '*', '/'];
    const operator = document.createElement('div');
    operator.classList.add('arithmetic');
    operator.textContent = operators[Math.floor(Math.random() * operators.length)];
    document.body.appendChild(operator);
    
    operator.style.left = e.clientX + 'px';
    operator.style.top = e.clientY + 'px';

    setTimeout(() => {
        operator.remove();
    }, 500); // Duration the operators remain visible (in milliseconds)
});

// Binary code effect
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const binaryCode = document.createElement('div');
    binaryCode.classList.add('binary-code');
    
    for (let i = 0; i < 50; i++) { // Increase number of lines
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.setProperty('--i', i);
        
        for (let j = 0; j < 30; j++) {
            const bit = document.createElement('div');
            bit.textContent = Math.random() > 0.5 ? '1' : '0';
            line.appendChild(bit);
        }
        
        binaryCode.appendChild(line);
    }
    
    banner.appendChild(binaryCode);
});
