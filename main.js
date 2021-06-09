function openTheApp(name) {
    let url = "";
    switch (name) {
        case "astar":
          url = "https://toiyeumayhoc.github.io/astar-javascript/";
          break;
        case "brain":
          url = "https://toiyeumayhoc.github.io/vietnamSuperBrainProblemSolver/";
          break;
        case "butter":
           url = "https://toiyeumayhoc.github.io/evolution-of-butterfly/";
          break;
        case "sudoku":
          url = "https://toiyeumayhoc.github.io/sudokuResolver/";
          break;       
      }
      location.href=url;
}