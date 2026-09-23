const limiteVelocidade = 80;

function verificar() {
            // Pega o valor digitado no input
            const campo = document.getElementById('velocidade');
            const velocidade = document.getElementById('resultado');
            
            var vel = Number(campo.value); // Converte para número

            // Exibe a velocidade atual (deixando o valor em negrito, como na image)
            velocidade.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h.</p>`;

            // Lógica para verificar se foi multado (considerando 60 km/h como limite)
            if (vel > 60) { 
                res.innerHTML += `<p>Velocidade acima do permitido! MULTADO.</p>`;
            } else {
                res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`;
            }
        }