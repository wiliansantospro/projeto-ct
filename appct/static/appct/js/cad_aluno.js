// Obtém a referência para o elemento select
const selectSexo = document.getElementById('sexo-select');

// Obtém a referência para o elemento de input
const inputOrientacao = document.getElementById('orientacao');

// Adiciona um ouvinte de evento para o evento change do select
selectSexo.addEventListener('change', function() {
    // Verifica se a opção selecionada é "Outro"
    if (this.value === 'Outro') {
        // Habilita a caixa de texto e define o placeholder
        inputOrientacao.disabled = false;
        inputOrientacao.placeholder = 'Digite sua orientação...';
    } else {
        // Desabilita a caixa de texto e limpa o valor e placeholder
        inputOrientacao.disabled = true;
        inputOrientacao.value = '';
        inputOrientacao.placeholder = '';
    }
});

 // Obtém todos os elementos de checkbox
 const checkboxes = document.querySelectorAll('.check-graduacao');

 // Adiciona um evento de clique a cada checkbox
 checkboxes.forEach(function (checkbox) {
   checkbox.addEventListener('click', function () {
     // Verifica se o checkbox atual está sendo marcado
     if (this.checked) {
       // Desabilita os outros checkboxes do mesmo grupo
       const group = this.getAttribute('data-group');
       checkboxes.forEach(function (otherCheckbox) {
         if (otherCheckbox !== checkbox && otherCheckbox.getAttribute('data-group') === group) {
           otherCheckbox.checked = false;
           otherCheckbox.disabled = true;
           const caixaTexto = otherCheckbox.parentNode.nextElementSibling.querySelector('select');
           caixaTexto.disabled = true;
         }
       });
     } else {
       // Habilita todos os checkboxes
       checkboxes.forEach(function (otherCheckbox) {
         otherCheckbox.disabled = false;
         const caixaTexto = otherCheckbox.parentNode.nextElementSibling.querySelector('select');
         caixaTexto.disabled = true;
       });
     }

     // Obtém a caixa de texto associada ao checkbox atual
     const caixaTexto = this.parentNode.nextElementSibling.querySelector('select');

     // Habilita ou desabilita a caixa de texto de acordo com o estado do checkbox
     caixaTexto.disabled = !this.checked;
   });
 });