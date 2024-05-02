document.addEventListener('DOMContentLoaded', function() {
    var vagasList = document.getElementById('vagasList');

    
    var vagasCadastradas = [
        { plate: 'ABC1234', model: 'Toyota Corolla', color: 'Preto', parkingNumber: 'A101' },
        { plate: 'XYZ5678', model: 'Honda Civic', color: 'Branco', parkingNumber: 'B202' },
        { plate: 'DEF9876', model: 'Ford Fiesta', color: 'Azul', parkingNumber: 'C303' }
    ];

    
    vagasCadastradas.forEach(function(vaga) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${vaga.plate}</td>
            <td>${vaga.model}</td>
            <td>${vaga.color}</td>
            <td>${vaga.parkingNumber}</td>
        `;
        vagasList.appendChild(row);
    });
});