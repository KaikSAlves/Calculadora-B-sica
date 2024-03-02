        function insert(num)
        {
           var numero = document.getElementById('resultado').innerHTML;
           document.getElementById('resultado').innerHTML = numero+ num;
        }
        function apagar()
        {
            var apagar = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = apagar.substring(0,apagar.length-1);
        }
        function limpar()
        {
            document.getElementById('resultado').innerHTML = "";
        }
        function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;

            if (resultado){
                var calculo = eval(resultado);
                if (Number.isInteger(calculo) == false)
                {
                calculo = calculo.toFixed(2);
                }
                document.getElementById('resultado').innerHTML = calculo;
                

            }

            
        }