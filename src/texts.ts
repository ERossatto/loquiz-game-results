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
    textTest: new Languages({
      pt: 'O componente esta funcionando',
      en: 'The component works',
    }),
  },
};
