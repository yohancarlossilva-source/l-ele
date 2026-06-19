
package com.agro.estatisticas;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*") // Permite que o HTML acesse a API sem problemas de CORS
public class AgroController {

    @GetMapping("/api/estatisticas")
    public Map<String, Object> getEstatisticas() {
        Map<String, Object> dados = new HashMap<>();
        
        // Nomes das culturas agrícolas
        String[] culturas = {"Soja", "Milho", "Arroz", "Algodão", "Feijão"};
        // Valores em milhões de toneladas (Exemplo baseado em dados Conab)
        double[] producao = {147.3, 115.8, 10.5, 3.2, 3.1}; 
        
        dados.put("culturas", culturas);
        dados.put("producao", producao);
        dados.put("pibParticipacao", "25%");
        dados.put("exportacoesBilhotoes", 160);

        return dados;
    }
}
