// --
// Definition of a very basic map
//

// - Curremtly pulls tiles from a 1600x1600 pixel tilemap of 32x32pixel tiles
// - Map has two layers, the first are background tiles that the characters can walk on
// - The second is populated with objects the characters cannot walk on
// --

export const tilesetpath = '/assets/rpg-tileset.png';
// sort of a hack to deal with limitations in the tile map
export const bgtileindex = 52;

// properties of tilemap
export const tiledim = 32; // 32x32 pixel tiles
// properties of onscreen map
export const screenxtiles = 25;
export const screenytiles = 25;



export const tilefiledim = 800; // 1600x1600 pixel file

// background tiles. Character should be able to walk over there
export const bgtiles = [
  Array.from({ length: 25 }, (_, i) => 
    Array.from({ length: 25 }, (_, j) => i * 25 + j)
  )
  
];

// objects. Characters should not be able to walk over there
export const objmap = 
[
[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74],
[75,76,77,-1,-1,80,-1,-1,83,84,85,-1,87,88,89,-1,-1,-1,93,94,95,-1,97,98,99],
[100,101,102,-1,-1,105,-1,-1,108,109,110,-1,112,113,-1,-1,-1,-1,-1,-1,-1,-1,122,123,124],
[125,126,127,-1,-1,130,-1,-1,-1,-1,-1,-1,137,138,139,-1,141,142,143,144,145,146,147,148,149],
[150,151,-1,-1,-1,155,-1,-1,-1,-1,-1,-1,162,163,164,-1,166,167,168,169,170,171,172,173,174],
[175,176,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,199],
[200,201,202,-1,-1,-1,-1,-1,208,209,-1,-1,-1,-1,-1,-1,216,217,218,219,-1,-1,-1,-1,224],
[225,226,227,228,229,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,241,242,243,244,-1,-1,-1,248,249],
[250,251,252,253,254,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,266,267,268,269,-1,-1,-1,273,274],
[275,276,277,278,279,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,298,299],
[300,301,302,303,304,-1,-1,-1,-1,-1,-1,-1,-312,313,314,-1,316,317,318,319,-1,-1,-1,323,324],
[325,326,327,328,-1,-1,-1,-1,-1,-1,-1,-1,-337,338,339,-1,341,342,-1,-1,-1,-1,-1,348,349],
[350,351,352,353,-1,-1,-1,357,358,359,360,-1,-362,363,364,-1,366,367,368,369,370,371,372,373,374],
[375,376,377,378,-1,-1,-1,382,383,384,385,-1,-387,388,389,-1,391,392,393,394,395,396,397,398,399],
[400,401,402,403,-1,-1,-1,-1,-1,-1,-1,-1,-412,413,-1,-1,-1,-1,-1,-1,-1,-1,-1,423,424],
[425,426,-1,-1,-1,-1,-1,-1,-1,434,435,436,437,438,-1,-1,441,442,443,444,445,-1,-1,448,449],
[450,451,-1,-1,454,455,-1,-1,-1,459,460,461,462,463,-1,-1,466,467,468,469,470,-1,-1,473,474],
[475,476,-1,-1,479,480,-1,-1,-1,484,485,486,487,488,-1,-1,491,492,493,494,495,-1,-1,498,499],
[500,501,-1,-1,504,505,-1,-1,-1,509,510,511,512,513,-1,-1,516,517,518,519,520,-1,-1,523,524],
[525,526,-1,-1,529,530,-1,-1,-1,534,535,536,537,538,-1,-1,541,542,543,544,545,-1,-1,548,549],
[550,551,-1,-1,-1,-1,-1,-1,-1,559,560,561,562,563,-1,-1,-1,-1,-1,-1,-1,-1,-1,573,574],
[575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599],
[600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624],
];
