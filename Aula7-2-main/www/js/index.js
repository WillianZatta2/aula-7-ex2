document.addEventListener('deviceready', onDeviceReady, false);

var claro = false;
function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    navigator.notification.prompt(
        'Informe o tema desejado:',
        mudar,
        'Tema',
        ['Ok', 'Cancel'],
        "warning"
    );
}

function mudar(result) {
    if (result.buttonIndex === 1) {
        const temaDigitado = result.input1.toLowerCase();
        switch (temaDigitado) {
            case 'primary':
                aplicarTema('primary');
                break;
            case 'secondary':
                aplicarTema('secondary');
                break;
            case 'success':
                aplicarTema('success');
                break;
            case 'info':
                aplicarTema('info');
                break;
            case 'warning':
                aplicarTema('warning');
                break;
            case 'danger':
                aplicarTema('danger');
                break;
            case 'light':
                aplicarTema('light');
                break;
            case 'dark':
                aplicarTema('dark');
                break;
            default:
                alert('Tema inválido, tente novamente!');
        }
    } else {
        alert('Operação cancelada!');
    }
}

// Função para aplicar o tema
function aplicarTema(tema) {
    const body = document.body;
    body.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger', 'bg-light', 'bg-dark');
    body.classList.add(`bg-${tema}`);
}
