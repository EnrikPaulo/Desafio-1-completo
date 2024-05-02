document.addEventListener('DOMContentLoaded', function() {
    var vagasDisponiveis = document.getElementById('vagasDisponiveis');

    
    var vagasCadastradas = [
        { plate: 'ABC1234', model: 'Toyota Corolla', color: 'Preto', parkingNumber: 'A101' },
        { plate: 'XYZ5678', model: 'Honda Civic', color: 'Branco', parkingNumber: 'B202' },
        { plate: 'DEF9876', model: 'Ford Fiesta', color: 'Azul', parkingNumber: 'C303' }
    ];

   
    var vagasDisponiveisData = [
        { parkingNumber: 'A102' },
        { parkingNumber: 'B203' },
        { parkingNumber: 'C304' },
        { parkingNumber: 'D405' },
        { parkingNumber: 'E506' }
    ];

    // Remover vagas que estão cadastradas
    vagasCadastradas.forEach(function(vagaCadastrada) {
        vagasDisponiveisData = vagasDisponiveisData.filter(function(vagaDisponivel) {
            return vagaDisponivel.parkingNumber !== vagaCadastrada.parkingNumber;
        });
    });

    
    vagasDisponiveisData.forEach(function(vagaDisponivel) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Vaga ' + vagaDisponivel.parkingNumber + ' - Disponível';
        vagasDisponiveis.appendChild(listItem);
    });
});