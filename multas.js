 function verificar() {
            // Pega o valor digitado no input
            var txtv = document.getElementById('txtvel');
            var res = document.getElementById('resultado');
            var vel = Number(txtv.value); // Converte para número

            // Exibe a velocidade atual (deixando o valor em negrito, como na imagem)
            res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h.</p>`;

            // Lógica para verificar se foi multado (considerando 60 km/h como limite)
            if (vel > 60) { 
                res.innerHTML += `<p>Velocidade acima do permitido! MULTADO.</p>`;
            } else {
                res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`;
            }
        }