document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('cardNumber');
    const invoiceInfoDiv = document.getElementById('invoiceInfo');
    const companyName = document.getElementById('companyName');
    const email = document.getElementById('email');
    const legalId = document.getElementById('legalId');
    const activityCode = document.getElementById('activityCode');
    
    // Base de datos de las tarjetas
    const cardData = {
        '3622': {
            companyName: 'JCHV Intervención Cardiológica SA',
            legalId: '3-101-877792',
            email: 'facturascardiocrc@gmail.com',
            activityCode: '851210'
        },
        '0389': {
            companyName: 'JC TAVI CARDIO SRL',
            legalId: '3102877875',
            email: 'facturascardiocrc@gmail.com',
            activityCode: '851210'
        },
        '2254': {
            companyName: 'Jorge Andrés Chavarría Víquez',
            legalId: '1-1205-0946',
            email: 'facturascardiocrc@gmail.com',
            activityCode: '851210'
        },
        '8562': {
            companyName: 'MEDCHAVA SRL',
            legalId: '3-102-918289',
            email: 'medchavasrl@gmail.com',
            activityCode: '851210'
        },
        '8588': {
            companyName: 'MEDCHAVA SRL',
            legalId: '3-102-918289',
            email: 'medchavasrl@gmail.com',
            activityCode: '851210'
        }
    };

    cardNumberInput.addEventListener('input', () => {
        const lastFourDigits = cardNumberInput.value.trim();

        if (lastFourDigits.length === 4 && cardData[lastFourDigits]) {
            const data = cardData[lastFourDigits];
            companyName.textContent = data.companyName;
            email.textContent = data.email;
            legalId.textContent = data.legalId;
            activityCode.textContent = data.activityCode;
            invoiceInfoDiv.classList.remove('hidden');
        } else {
            // Borra la información y oculta la sección si no hay coincidencia
            companyName.textContent = '';
            email.textContent = '';
            legalId.textContent = '';
            activityCode.textContent = '';
            invoiceInfoDiv.classList.add('hidden');
        }
    });
});