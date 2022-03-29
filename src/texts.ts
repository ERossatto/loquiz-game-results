class Languages {
  public pt: string;
  public en: string;

  constructor({pt, en}: {pt: string, en: string}) {
    this.pt = pt;
    this.en = en;
  }
}

export const texts = {
  menuDash: {
    optionList: {
      gameResults: new Languages({
        pt: 'resultado dos jogos',
        en: 'game results',
      }),
      aboutProject:  new Languages({
        pt: 'sobre o projeto',
        en: 'about project',
      }),
    },
  },
  gameResults: {
    gameSelector: {
      title:  new Languages({
        pt: 'Seletor de jogos',
        en: 'Game Selector'
      }),
      selectGame:  new Languages({
        pt: 'Selecione um jogo',
        en: 'Select a game'
      })
    },
    teamsInfo: {
      title: new Languages({
        pt: 'Informações dos times',
        en: 'Teams info'
      }),
      column: {
        id: new Languages({
          pt: 'ID',
          en: 'ID'
        }),
        name: new Languages({
          pt: 'Nome do time',
          en: 'Team Name'
        }),
        playtime: new Languages({
          pt: 'Tempo de Jogo',
          en: 'Play Time'
        }),
        odometer: new Languages({
          pt: 'Hodômetro',
          en: 'Odometer'
        }),
        totalscore: new Languages({
          pt: 'Pontuação Final',
          en: 'Total Score'
        }),
      }
    }
  },
  aboutProject: {
    description: {
      title: new Languages({
        pt: 'Descrição',
        en: 'Description',
      }),
      text1: new Languages({
        pt: `Este projeto foi desenvolvido como um teste de trabalho. Com toda atenção e esforços que o tempo disponível permitiu.`,
        en: `This project was developed as a job test. With all the attention and efforts that the provided time allowed.`,
      }),
      text2: new Languages({
        pt: `Este é um painel para mostrar informações sobre os times que jogaram um determinado jogo da loquiz. Consumindo a API deles.`,
        en: `This is a panel to show information about the teams that played a certain loquiz game. By consuming their api.`,
      }),
      text3: new Languages({
        pt: `Ele carrega um jogo específico por padrão e você pode alterar o jogo no menu suspenso.`,
        en: `It loads a specific game by default and you can change the game from the drop down.`,
      }),
      text4: new Languages({
        pt: `Confira todo o projeto (arquivos e códigos) aqui:`,
        en: `Checkout all project (associated files and code) in here:`,
      }),
    },
    limits: {
      title: new Languages({
        pt: 'Limitações e Melhorias',
        en: 'Limitations and Improvements',
      }),
      item1: new Languages({
        pt: 'Não é adequado para dispositivos móveis - Esta exibição de resultados de jogos ainda não é adequada para usuários de dispositivos móveis.',
        en: 'Not suitable for mobile - This display game results is still not suitable for mobile users.',
      }),
      item2: new Languages({
        pt: 'Sem testes unitários - A exibição de resultados de jogos foi feita de uma maneira mvp muito simples, então ainda não há um conjunto de testes.',
        en: 'No unit tests - This game results was made in a very simple mvp manner, so there is no testing set yet.',
      }),
      item3: new Languages({
        pt: 'Pode ter uma interface de usuário melhor.',
        en: 'It can have a better UI.',
      }),
      item4: new Languages({
        pt: 'Pode ter um design melhor.',
        en: 'It can have a better Design.',
      }),
      item5: new Languages({
        pt: 'Ele pode proteger informações de API.',
        en: 'It can protect api infos.',
      }),
    }
  },
};
