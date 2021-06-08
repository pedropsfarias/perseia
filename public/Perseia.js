class Perseia {

    constructor() {

        this.surveysData = '';
        this.layersName = [
            //'ccja_andar0_1',

        ];

        this.tests = [
            {
                test: 'sem_rel_esp',
                routes: [
                    {
                        type: 'complete',
                        title: 'ROTA RUBENS MEISTER',
                        startPoint: [-49.2328477, -25.4522988],
                        descriptions: [
                            `<div class="description-text">
                        Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                    '</div>`,
                            `<div class="description-text">
                        1) Caminhe para oeste por 12m
                    </div>`,
                            `<div class="description-text">
                        2) Caminhe para o norte por 22m
                    </div>`,
                            `<div class="description-text">
                        3) Caminhe para oeste por 12m
                    </div>`,
                            `<div class="description-text">
                        4) Caminhe para o norte por 41m
                    </div>`,
                            `<div class="description-text">
                        5) Caminhe para oeste por 14m
                    </div>`,
                            `<div class="description-text">
                        6) Caminhe para o norte por 21m
                    </div>`,
                            `<div class="description-text">
                        7) Caminhe para leste por 27m
                    </div>`,
                            `<div class="description-text">
                        8) Caminhe para o norte por 18m
                    </div>`,
                            `<div class="description-text">
                        9) Caminhe para oeste por 12m
                    </div>`,
                            `<div class="description-text">
                        10) Caminhe para o norte por 91m
                    </div>`,
                            `<div class="description-text">
                        11) Você chegou ao seu destino
                    </div>`
                        ],
                        survey: [
                            {
                                description: 'Com que frequência você costuma se perder em ambientes indoor?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota ?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Como você considera sua percepção de distância?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Se houvessem pontos de referência na descrição da rota, por exemplo: caminhe por 16m em direção ao museu. Qual o nível de ajuda você acredita que essa informação a mais te traria? ',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            // {
                            //     image: 'p1.png',
                            //     description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                            //     type: 'ab'
                            // },
                        ]
                    },
                    {
                        type: 'complete',
                        title: 'ROTA BIOLÓGICAS',
                        startPoint: [-49.2328354, -25.4461572],
                        descriptions: [
                            `<div class="description-text">
                                Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                            </div>`,
                            `<div class="description-text">
                                1) Caminhe para norte por 6 m
                            </div>`,
                            `<div class="description-text">
                                2) Caminhe para o leste por 24 m
                            </div>`,
                            `<div class="description-text">
                                3) Caminhe para sul por 39 m
                            </div>`,
                            `<div class="description-text">
                                4) Caminhe para o leste por 12 m
                            </div>`,
                            `<div class="description-text">
                                5) Caminhe para sul por 81 m
                            </div>`,
                            `<div class="description-text">
                                6) Caminhe para o leste por 40 m
                            </div>`,
                            `<div class="description-text">
                                7) Caminhe para norte por 8 m
                            </div>`,
                            `<div class="description-text">
                                8) Caminhe para o leste por 33 m
                            </div>`,
                            `<div class="description-text">
                                9) Caminhe para o norte por 11 m
                            </div>`,
                            `<div class="description-text">
                               10) Você chegou ao seu destino
                            </div>`
                        ],
                        survey: [
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            {
                                image: 't12.jpg',
                                description: 'Dentre as descrições de rota apresentadas abaixo, qual descrição você prefere?',
                                type: 'ab'
                            },
                        ]
                    }
                ]
            },
            {
                test: 'rel_esp',
                routes: [
                    {
                        type: 'complete',
                        title: 'ROTA RUBENS MEISTER',
                        startPoint: [-49.2328477, -25.4522988],
                        descriptions: [
                            `<div class="description-text">
                                Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                            </div>`,
                            `<div class="description-text">
                                1) Siga para a esquerda
                            </div>`,
                            `<div class="description-text">
                                2) Vire para a direita
                            </div>`,
                            `<div class="description-text">
                                3) Vire à esquerda
                            </div>`,
                            `<div class="description-text">
                                4) Em seguida vire à direita e caminhe até o final
                            </div>`,
                            `<div class="description-text">
                                5) Depois siga para o lado esquerdo
                            </div>`,
                            `<div class="description-text">
                                6) Vire para a direita
                            </div>`,
                            `<div class="description-text">
                                7) Vire para direita novamente
                            </div>`,
                            `<div class="description-text">
                                8) Vire para a esquerda
                            </div>`,
                            `<div class="description-text">
                                9) Novamente a esquerda
                            </div>`,
                            `<div class="description-text">
                                10) Vire para a direita e siga até o final
                            </div>`,
                            `<div class="description-text">
                               11) Você chegou ao seu destino
                            </div>`
                        ],
                        survey: [
                            {
                                description: 'Com que frequência você costuma se perder em ambientes indoor?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota ?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Se houvessem pontos de referência na descrição da rota, por exemplo: caminhe por 16m em direção ao museu. Qual o nível de ajuda você acredita que essa informação a mais te traria? ',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            // {
                            //     image: 'p1.png',
                            //     description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                            //     type: 'ab'
                            // },
                        ]
                    },
                    {
                        type: 'complete',
                        title: 'ROTA BIOLÓGICAS',
                        startPoint: [-49.2328354, -25.4461572],
                        descriptions: [
                            `<div class="description-text">
                                Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                            </div>`,
                            `<div class="description-text">
                                1) Siga para a direita
                            </div>`,
                            `<div class="description-text">
                                2) Vire à direita e vá até o final 
                            </div>`,
                            `<div class="description-text">
                                3) Vire novamente a direita
                            </div>`,
                            `<div class="description-text">
                                4) Entre a esquerda, depois vire à direita
                            </div>`,
                            `<div class="description-text">
                                5) Vire para a esquerda vá até o final e vire para a esquerda
                            </div>`,
                            `<div class="description-text">
                                6) Novamente vire à esquerda
                            </div>`,
                            `<div class="description-text">
                                7) Vire à direita
                            </div>`,
                            `<div class="description-text">
                               8) E em seguida a esquerda e siga até o final
                            </div>`,
                            `<div class="description-text">
                              9) Você chegou ao seu destino
                            </div>`
                        ],
                        survey: [
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            {
                                image: 't12.jpg',
                                description: 'Dentre as descrições de rota apresentadas abaixo, qual descrição você prefere?',
                                type: 'ab'
                            },
                        ]
                    }
                ]
            },
            {
                test: 'com_MR',
                routes: [
                    {
                        type: 'complete',
                        title: 'ROTA RUBENS MEISTER',
                        startPoint: [-49.2328477, -25.4522988],
                        descriptions: [
                            `<div class="description-text">
                        Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                    '</div>`,
                            `<div class="description-text">
                        1) Siga para a esquerda e em seguida vire a direita
                    </div>`,
                            `<div class="description-text">
                       2) Vá até o final do corredor e vire a esquerda
                    </div>`,
                            `<div class="description-text">
                        3) Depois da cantina e vire para a direita 
                    </div>`,
                            `<div class="description-text">
                       4) Siga em frente até o final do corredor
                    </div>`,
                            `<div class="description-text">
                        5) Siga para o lado oposto a papelaria
                    </div>`,
                            `<div class="description-text">
                        6) Em seguida vire à direita e novamente a direita
                    </div>`,
                            `<div class="description-text">
                        7) Vire para a esquerda e novamente para a esquerda
                    </div>`,
                            `<div class="description-text">
                        8) Vire para a direita e passe em frente a biblioteca, atravesse na passarela
                    </div>`,
                            `<div class="description-text">
                        9) A frente estará o seu destino
                    </div>`

                        ],
                        survey: [
                            {
                                description: 'Com que frequência você costuma se perder em ambientes indoor?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Se houvessem mais pontos de referência na descrição da rota, por exemplo: caminhe por 16m em direção ao museu e vire depois do elevador. Qual o nível de ajuda você acredita que essas informações a mais te trariam? ',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            // {
                            //     image: 'p1.png',
                            //     description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                            //     type: 'ab'
                            // },
                        ]
                    },
                    {
                        type: 'complete',
                        title: 'ROTA BIOLÓGICAS',
                        startPoint: [-49.2328354, -25.4461572],
                        descriptions: [
                            `<div class="description-text">
                                Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                            </div>`,
                            `<div class="description-text">
                                1) Siga em direção a cantina
                            </div>`,
                            `<div class="description-text">
                                2) Vire à direita e vá até o final 
                            </div>`,
                            `<div class="description-text">
                                3) Vire novamente a direita, atravesse a passarela
                            </div>`,
                            `<div class="description-text">
                                4) Entre a esquerda, depois vire à direita em direção a papelaria
                            </div>`,
                            `<div class="description-text">
                                5) Após passar a papelaria vire para a esquerda vá até o final e caminhe em direção a cantina
                            </div>`,
                            `<div class="description-text">
                                6) Passe em frente a cantina e vire à esquerda
                            </div>`,
                            `<div class="description-text">
                                7) A frente estará o seu destino
                            </div>`

                        ],
                        survey: [
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edifícios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            {
                                image: 't34.jpg',
                                description: 'Dentre as descrições de rota apresentadas abaixo, qual descrição você prefere?',
                                type: 'ab'
                            },
                        ]
                    }
                ]
            },
            {
                test: 'com_MR_POI',
                routes: [
                    {
                        type: 'complete',
                        title: 'ROTA RUBENS MEISTER',
                        startPoint: [-49.2328477, -25.4522988],
                        descriptions: [
                            `<div class="description-text">
                        Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                    '</div>`,

                            `<div class="description-text">
                        1) Siga para a esquerda em direção ao elevador e em seguida vire a direita
                    </div>`,
                            `<div class="description-text">
                        2) Vá até o final do corredor e vire a esquerda
                    </div>`,
                            `<div class="description-text">
                        3) Depois da cantina e vire para a direita
                    </div>`,
                            `<div class="description-text">
                       4) Após a segunda escada, siga para o lado oposto a papelaria
                    </div>`,
                            `<div class="description-text">
                        5) Passe pelo equipamento de incêndio e vire à direita
                    </div>`,
                            `<div class="description-text">
                       6) Após as portas de saída vire à direita novamente
                    </div>`,
                            `<div class="description-text">
                        7) Ande em direção a saída mais próxima e passe em frente dela
                    </div>`,
                            `<div class="description-text">
                        8) Vire para a esquerda
                    </div>`,
                            `<div class="description-text">
                        9) Vire para a direita e passe em frente a biblioteca, e passe na passarela
                    </div>`,
                            `<div class="description-text">
                        10) A frente estará o seu destino
                    </div>`

                        ],
                        survey: [
                            {
                                description: 'Com que frequência você costuma se perder em ambientes indoor?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota ?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Os pontos de referência presentes na descrição te ajudaram a se localizar ',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edificios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            // {
                            //     image: 'p1.png',
                            //     description: 'QUAL DESCRIÇÃO VOCÊ PREFERE?',
                            //     type: 'ab'
                            // },
                        ]
                    },
                    {
                        type: 'complete',
                        title: 'ROTA BIOLÓGICAS',
                        startPoint: [-49.2328354, -25.4461572],
                        descriptions: [
                            `<div class="description-text">
                                Considerando que você está parado e olhando de frente para o banheiro, siga as instruções abaixo:
                            </div>`,
                            `<div class="description-text">
                                1) Siga em direção a cantina
                            </div>`,
                            `<div class="description-text">
                                2) Vire à direita e depois da escada vire à direita na porta de saída
                            </div>`,
                            `<div class="description-text">
                                3) Passe pela escada e atravesse a passarela 
                            </div>`,
                            `<div class="description-text">
                                4) Entre a esquerda, e no banheiro vire à direita em direção a papelaria
                            </div>`,
                            `<div class="description-text">
                                5) Após passar a papelaria vire para a esquerda na escada
                            </div>`,
                            `<div class="description-text">
                                6) Depois do terceiro hidrante caminhe em direção a cantina
                            </div>`,
                            `<div class="description-text">
                                7) Passe em frente a cantina e vire à esquerda 
                            </div>`,
                            `<div class="description-text">
                                8) A frente estará o seu destino 
                            </div>`

                        ],
                        survey: [
                            {
                                description: 'Qual o seu grau de familiaridade com o ambiente da tarefa anterior?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Qual foi seu nível de dificuldade ao executar a tarefa do traçado de rota ?',
                                type: 'stars',
                                labels: ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto']
                            },
                            {
                                description: 'Quantifique a sua necessidade de consultar instruções anteriores para se certificar de que estava no local correto?',
                                type: 'stars',
                                labels: ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta']
                            },
                            {
                                description: 'Tente descrever o mais detalhadamente a rota que você traçou na tarefa anterior, como se você a estivesse explicando para alguém que precisa percorrer o mesmo caminho.',
                                type: 'textarea'
                            },
                            {
                                description: 'Quais elementos do interior dos edificios você lembra de ter visto no mapa?',
                                type: 'textarea'
                            },
                            // {
                            //     description: 'PR DE REFERENCIA TE AJUDARIAM? CAMINHE POR 16M ATÉ A CANTINA?',
                            //     type: 'yesno'
                            // },
                            {
                                image: 't34.jpg',
                                description: 'Dentre as descrições de rota apresentadas abaixo, qual descrição você prefere?',
                                type: 'ab'
                            },
                        ]
                    }
                ]
            }

        ]

        this.startTimes = [];
        this.endTimes = [];



        this.getSurveyType();
        this.createQgis2webPolyFill();
        this.initElements();
        this.registerEvents();

        // this.initMap(); // remove
        // this.createLayers();
        // this.initRouteLayer();
        // this.initInteractions();
        // this.createRoute();


        //this.routeDefinition = this.routes[0];
        // this.startSurvey();

    }

    getSurveyType() {

        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', '/api/test', true);
        // xhr.setRequestHeader('Content-type', 'text/plain');
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         this.testNumber = xhr.responseText;
        //     }
        // }
        // xhr.send();

        this.testNumber = prompt('n test? (1,2,3,4)', '1');

    }

    initMap() {

        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: 'tiles/{z}/{x}/{y}.png',
                        tilePixelRatio: 2
                    })
                })
            ],
            target: 'map',
            view: new ol.View({
                center: [-5480575.337250389, -2931337.0036498797],
                zoom: 20,
                minZoom: 17,
                maxZoom: 20,

            }),
            interactions: ol.interaction.defaults({ mouseWheelZoom: false }).extend([
                new ol.interaction.MouseWheelZoom({
                    constrainResolution: true // force zooming to a integer zoom
                })
            ]),
            controls: [
                new ol.control.ScaleLine({
                    units: 'metric',

                })
            ]
        })

        this.map.getView().on('change:rotation', () => {

            let rotation = this.map.getView().getRotation();
            let rvElm = document.getElementById('rv');
            rvElm.style.transform = `rotate(${rotation + 0.383972}rad)`;

        });

    }

    initPOILayer() {

        let format = new ol.format.GeoJSON();
        let features = format.readFeatures(poi, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });

        this.poiLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: f => {

                const p = f.getProperties()['tipoAmb'];
                let icon, size, isPOI = false;
                switch (p) {
                    case 'Escada':
                        icon = 'POI_Escada.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Banheiro Compartilhado':
                        icon = 'POI_Banheiro.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Elevador':
                        icon = 'POI_Elevador.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Papelaria':
                        icon = 'MR_Papelaria.svg';
                        size = 12;
                        break;
                    case 'Cantina':
                        icon = 'MR_cantina.svg';
                        size = 12;
                        break;
                    case 'Extintor de Incêndio':
                        icon = 'POI_equip_incendio.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Hidrante':
                        icon = 'POI_equip_incendio.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Portas':
                        icon = 'POI_Saida.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Saida':
                        icon = 'POI_Saida.svg';
                        size = 12;
                        isPOI = true;
                        break;
                    case 'Corredor Suspenso':
                        icon = 'MR_corredor_suspenso.svg';
                        size = 12;
                        break;
                    case 'Biblioteca':
                        icon = 'MR_biblioteca.svg';
                        size = 12;
                        break;
                    default:
                        break;
                }

                let style = [new ol.style.Style({
                    image: new ol.style.Icon({
                        anchor: [0.5, 0.5],
                        src: 'imgs/' + icon,

                    }),
                })];

                if (!isPOI) {

                    return style;

                } else {

                    if (this.map.getView().getZoom() > 18) {

                        return style;

                    }

                }

                return [];

            }

        });

        this.poiLayer.getSource().addFeatures(features);

        this.map.addLayer(this.poiLayer);



    }

    initRouteLayer() {

        this.routeLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        });
        this.map.addLayer(this.routeLayer);


    }

    initInteractions() {

        this.drawLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'magenta',
                    width: 2
                })
            })
        });

        this.map.addLayer(this.drawLayer);

        this.modifyInteraction = new ol.interaction.Modify({
            source: this.drawLayer.getSource()
        });

        this.drawInteraction = new ol.interaction.Draw({
            source: this.drawLayer.getSource(),
            type: 'LineString'
        });

        this.drawInteraction.on('drawend', () => {

            this.confirmEnd();

        });

    }

    initElements() {

        this.startBtn = document.getElementById('start');
        this.pauseBtn = document.getElementById('pause');
        this.restartBtn = document.getElementById('restart');
        this.drawBtn = document.getElementById('draw');
        this.undoBtn = document.getElementById('undo');
        this.finishBtn = document.getElementById('finish');
        this.agreeBtn = document.getElementById('agree');
        this.cancelBtn = document.getElementById('box-cancel');
        this.boxFinishBtn = document.getElementById('box-finish');
        this.surveyFinishBtn = document.getElementById('survey-finish');
        this.disclaimerElm = document.getElementById('disclaimer');
        this.instructionsElm = document.getElementById('instructions');
        this.mainElm = document.getElementById('main');
        this.boxElm = document.getElementById('box');
        this.surveyElm = document.getElementById('survey');
        this.thanksElm = document.getElementById('thanks');
        this.boxContentElm = document.getElementById('box-content');
        this.mapElm = document.getElementById('map');
        this.descriptionElm = document.getElementById('description');
        this.titleElm = document.getElementById('title');
        this.surveyContentElm = document.getElementById('survey-content');
        this.pauseBoxElm = document.getElementById('pause-box');


    }


    createLayers() {

        for (let i = 0; i < this.layersName.length; i++) {
            const layerName = this.layersName[i];
            this.createGsonLayer(layerName);
        }

    }

    createGsonLayer(layerName) {

        let format = new ol.format.GeoJSON();
        let features = format.readFeatures(window[`json_${layerName}`], {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });
        let source = new ol.source.Vector();
        source.addFeatures(features);
        let layer = new ol.layer.Vector({
            source: source,
            style: window[`style_${layerName}`],
            interactive: true
        });
        this.map.addLayer(layer);

    }

    startFullScreen() {

        let elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

    }

    endFullScreen() {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }

    }

    confirmEnd() {

        this.drawBtn.classList.remove('active-tool');
        this.undoBtn.classList.add('d-none');
        setTimeout(() => {
            this.map.removeInteraction(this.drawInteraction);
        }, 500)

        this.boxElm.classList.remove('d-none');
        this.boxContentElm.innerHTML = `
            <h3>Deseja finalizar o teste?</h3>
        `;

    }

    getTimes() {

        const startTime = this.startTimes[0];
        const endTime = this.endTimes[this.endTimes.length - 1];
        let duration = 0;

        for (let i = 0; i < this.startTimes.length; i++) {
            duration += this.endTimes[i] - this.startTimes[i];
        }

        return { startTime, endTime, duration }


    }

    getSurveyDataAsTSV() {

        let data = '';
        data += `${this.routeDefinition.geom}\t`;;

        let survey = this.routeDefinition.survey;
        for (let j = 0; j < survey.length; j++) {

            const question = survey[j];
            switch (question.type) {
                case 'stars':
                case 'yesno':
                case 'ab':

                    let input = document.querySelectorAll(`input[name='${question.name}']:checked`)[0];
                    data += input.value + '\t';
                    break;

                case 'textarea':
                    data += question.input.value + '\t';
                    break;

                default:
                    break;
            }

        }


        return data;

    }

    getTestDataAsTSV() {

        const { startTime, endTime, duration } = this.getTimes();
        let data = '';
        data += `${startTime}\t`;
        data += `${endTime}\t`;
        data += `${duration / 1000}\t`;
        data += this.surveysData;

        return data;

    }

    saveSurvey() {

        let data = this.getTestDataAsTSV();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/' + this.tests[this.testNumber - 1].test, true);
        xhr.setRequestHeader('Content-type', 'text/plain');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(data);

    }

    createRoute() {

        this.startTimes.push(Date.now());
        this.routeDefinition = this.tests[this.testNumber - 1].routes[this.currentRoute];
        if (this.routeDefinition.type == 'complete') {
            this.createCompleteRoute();
        }

    }

    createCompleteRoute() {

        this.descriptionElm.innerHTML = '';
        this.titleElm.innerHTML = this.routeDefinition.title;

        let d = this.routeDefinition.descriptions;
        for (let i = 0; i < d.length; i++) {
            this.descriptionElm.innerHTML += this.getRouteHtml(d[i]);
        }

        this.createStartPoint(this.routeDefinition.startPoint);
    }

    createStartPoint(p) {

        this.routeLayer.getSource().clear();
        let pt = ol.proj.transform(
            p,
            'EPSG:4326',
            'EPSG:3857'
        );

        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(pt)
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                src: 'imgs/start.png'
            }),
        });

        iconFeature.setStyle(iconStyle);
        this.routeLayer.getSource().addFeature(iconFeature);

        this.map.getView().setCenter(pt);
        this.map.getView().setRotation(-0.383972);
    }

    getRouteHtml(h) {

        return `
            <div class="description-item active">
                ${h}
            </div>
        `;

    }

    drawSegment(s, color, width) {

        let format = new ol.format.GeoJSON();
        let feature = format.readFeature(s, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });
        feature.setStyle(new ol.style.Style({
            stroke: new ol.style.Stroke({
                color, width
            })
        }));
        this.routeLayer.getSource().addFeature(feature);

    }

    getRadioElm(name, value, text) {

        let container = document.createElement('div');
        let id = this.createUUID();

        let star = document.createElement('input');
        star.type = 'radio';
        star.value = value;
        star.name = name;
        star.id = id;

        let label = document.createElement('label');
        label.innerHTML = text || value;
        label.setAttribute('for', id);

        container.append(star);
        container.append(label);

        return container;

    }

    getImageElm(name) {

        let image = document.createElement('img');
        if (name) {
            image.src = `imgs/${name}`;
            return image;
        }
        return document.createElement('div');

    }

    createUUID() {

        let dt = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    startSurvey() {

        this.surveyElm.classList.remove('d-none');
        this.surveyContentElm.innerHTML = '';
        this.surveyContentElm.scrollTop = 0;
        this.surveyElm.scrollTop = 0;

        let survey = this.routeDefinition.survey;
        for (let i = 0; i < survey.length; i++) {

            let question = survey[i];
            question.label = document.createElement('label');
            question.label.innerHTML = question.description;
            this.surveyContentElm.append(question.label);
            this.surveyContentElm.append(this.getImageElm(question.image));

            switch (question.type) {
                case 'stars':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 1, question.labels[0] || '1 - Muito baixo');
                    question.s2 = this.getRadioElm(question.name, 2, question.labels[1] || '2 - Baixo');
                    question.s3 = this.getRadioElm(question.name, 3, question.labels[2] || '3 - Médio');
                    question.s4 = this.getRadioElm(question.name, 4, question.labels[3] || '4 - Alto');
                    question.s5 = this.getRadioElm(question.name, 5, question.labels[4] || '5 - Muito alto');

                    question.elements = [question.s1, question.s2, question.s3, question.s4, question.s5];

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);
                    this.surveyContentElm.append(question.s3);
                    this.surveyContentElm.append(question.s4);
                    this.surveyContentElm.append(question.s5);

                    break;

                case 'yesno':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 'Sim');
                    question.s2 = this.getRadioElm(question.name, 'Não');

                    question.elements = [question.s1, question.s2];

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);

                    break;

                case 'ab':

                    question.name = this.createUUID();
                    question.s1 = this.getRadioElm(question.name, 'A');
                    question.s2 = this.getRadioElm(question.name, 'B');

                    question.elements = [question.s1, question.s2];

                    this.surveyContentElm.append(question.s1);
                    this.surveyContentElm.append(question.s2);

                    break;


                case 'textarea':


                    question.input = document.createElement('textarea');
                    question.input.rows = 5;

                    question.elements = [question.input];

                    this.surveyContentElm.append(question.input);

                    break;

                default:
                    break;
            }

            this.surveyContentElm.append(document.createElement('br'));

        }

    }

    saveDrawedGeom() {

        var format = new ol.format.WKT();
        var feature = format.writeFeature(this.drawLayer.getSource().getFeatures()[0], {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
        });
        this.routeDefinition.geom = feature;

    }


    registerEvents() {

        this.agreeBtn.addEventListener('click', () => {
            this.disclaimerElm.classList.add('d-none');
            this.instructionsElm.classList.remove('d-none');
        });

        this.startBtn.addEventListener('click', () => {

            this.instructionsElm.classList.add('d-none');
            this.mainElm.classList.remove('d-none');
            this.startFullScreen();
            this.initMap();
            this.initPOILayer();
            this.initInteractions();
            this.createLayers();
            this.initRouteLayer();

            this.routesCount = this.tests[this.testNumber - 1].routes.length;
            this.currentRoute = 0;
            this.createRoute();



        });

        this.pauseBtn.addEventListener('click', () => {
            this.endTimes.push(Date.now());
            this.pauseBoxElm.classList.remove('d-none');

        });

        this.restartBtn.addEventListener('click', () => {
            this.startTimes.push(Date.now());
            this.pauseBoxElm.classList.add('d-none');

        });

        this.drawBtn.addEventListener('click', () => {

            if (!this.drawInteraction.getMap()) {
                this.drawLayer.getSource().clear();
                this.map.addInteraction(this.drawInteraction);
                this.undoBtn.classList.remove('d-none');
                this.drawBtn.classList.add('active')
            }

        });

        this.undoBtn.addEventListener('click', () => {

            this.drawInteraction.removeLastPoint();

        });

        this.finishBtn.addEventListener('click', () => {

            if (!this.drawInteraction.getMap() &&
                this.drawLayer.getSource().getFeatures().length > 0) {
                this.confirmEnd();
            }

            this.undoBtn.classList.add('d-none');
            this.drawInteraction.finishDrawing();

            if (this.drawLayer.getSource().getFeatures().length == 0) {
                alert('Por favor, insira uma rota!');
                return;
            }

            this.map.removeInteraction(this.drawInteraction);


        });

        this.cancelBtn.addEventListener('click', () => {
            this.boxElm.classList.add('d-none');
        });

        this.boxFinishBtn.addEventListener('click', () => {

            this.endTimes.push(Date.now());
            this.boxElm.classList.add('d-none');

            this.saveDrawedGeom();
            this.startSurvey();
            this.endFullScreen();

        });

        this.surveyFinishBtn.addEventListener('click', () => {

            if (this.validateSurvey()) {

                if (this.routesCount - 1 > this.currentRoute) {

                    this.currentRoute++;
                    this.instructionsElm.classList.add('d-none');
                    this.mainElm.classList.remove('d-none');
                    this.boxElm.classList.add('d-none');
                    this.surveyElm.classList.add('d-none');
                    this.thanksElm.classList.add('d-none');
                    this.surveysData += this.getSurveyDataAsTSV();
                    this.createRoute();

                } else {

                    this.surveyElm.classList.add('d-none');
                    this.thanksElm.classList.remove('d-none');
                    this.surveysData += this.getSurveyDataAsTSV();
                    this.saveSurvey();

                }

            } else {

                alert('Para continuar, preencha os campos obrigatórios.');

            }

        });

    }

    validateSurvey() {

        let isOk = [];
        let checker = arr => arr.every(Boolean);
        let survey = this.routeDefinition.survey;
        for (let i = 0; i < survey.length; i++) {

            const question = survey[i];
            switch (question.type) {
                case 'stars':
                case 'yesno':
                case 'ab':
                    isOk.push(document.querySelectorAll(`input[name='${question.name}']:checked`).length > 0);
                    break;

                case 'textarea':
                    isOk.push(Boolean(question.input.value));
                    break;

                default:
                    break;
            }

        }

        return checker(isOk);

    }

    createQgis2webPolyFill() {

        window.createTextStyle = function () { };

    }


}