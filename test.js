const axios = require('axios')
axios.post('https://dev-translations-api.herokuapp.com/translate?source=pt&target=en', { 
    txt: `T2 Duplex no último andar inserido num empreendimento exclusivo e de qualidade superior com uma excelente localização a 20kms do Porto.
    Cozinha equipada com electrodomésticos da marca Siemens, ar condicionado e aspiração central.
    
    Pavimento em soalho de madeira, sanitários Roca, caixilharia de corte térmico com vidro duplo e estores eléctricos. 
    Acabamentos de qualidade e bom gosto!
    
    Financiamento Bancário:
    A Habita é parceira de várias entidades financeiras possibilitando a todos os seus clientes simulações gratuitas de Crédito à Habitação.
    
    Localização:
    Espinho é uma cidade portuguesa pertencente ao Distrito de Aveiro, à Região Norte e à Área Metropolitana do Porto.
    
    É sede de um pequeno município urbano, com 21,06 km² de área, subdividido em 4 freguesias. O município é limitado a norte pelo município de Vila Nova de Gaia, a leste por Santa Maria da Feira, a sul por Ovar e a oeste pelo Oceano Atlântico.
    
    A cidade de Espinho possui várias escolas, jardins de infância, ensino primário, básico e secundário. O Parque Escolar de Espinho divide-se em dois agrupamentos, o agrupamento de Escolas Dr. Manuel Laranjeira e o agrupamento de Escolas Dr. Manuel Gomes Almeida. Em relação ao Ensino Superior existiu até final de 2016 um Instituto Superior. Ainda existem várias escolas profissionais e escolas de Música.
    
    Cultura e Lazer:
    O Fórum de Arte e Cultura de Espinho surgiu do projecto de reabilitação da antiga Fábrica de Conservas Brandão, Gomes & C.ª; trata-se de um espaço dedicado à investigação, ao desenvolvimento cultural e à prestação de serviços à comunidade, numa confluência entre conhecimento, formação, educação e lazer.
    
    O Museu Municipal de Espinho ocupa o núcleo central da antiga fábrica. A funcionalidade do museu municipal passa, também, por uma galeria de exposições temporárias, pelo centro de documentação e investigação em história local e por um serviço educativo aberto às escolas e restante população.
    
    A Nave Polivalente de Espinho surge voltada para a dinamização desportiva e recreativa, tendo por objectivos a promoção e o desenvolvimento do concelho. Com uma área coberta de 11.000 m², este espaço foi concebido para grandes espectáculos desportivos e culturais, sendo altamente versátil e flexível.
    
    Integrado na Academia de Música de Espinho, o Auditório assegura uma produção cultural regular, que assenta em produções próprias, co-produções e acolhimentos em diversos domínios culturais (musical, teatral, dança, novo circo). Pelo seu contributo, tornou-se uma referência cultural a nível da cidade e da região. Tem como estrutura residente a Orquestra Clássica de Espinho e o Drumming-Grupo de Percussão.
    
    O Casino de Espinho começou a operar em 1974, sendo a primeira unidade do Grupo Solverde.
    
    O Complexo de Ténis de Espinho tem cumprido um papel de relevo no desenvolvimento do ténis em Portugal, nomeadamente na organização de eventos nacionais e internacionais, dispondo de uma das melhores infra-estruturas para a prática da modalidade.
    
    Inserido num espaço acolhedor, onde a natureza marca a sua presença, está equipado com 16 courts (12 campos exteriores e 3 interiores), sendo 8 em terra batida (5 exteriores e 3 interiores) 4 de relva sintética e 3 de piso sintético. O court central, em piso de terra batida, tem capacidade para cerca de 2000 espectadores.` 
}).then(res => console.log(res)).catch(error => console.log(error))