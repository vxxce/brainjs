const brain = require("brain.js")

const net = new brain.NeuralNetwork({ hiddenLayers: [4] })

const trainingData = [
  {
    input: {
      redding: 0.043750000000000004,
      frick: 0,
      greenbay: 0
    },
    output: { bravo: 0.04791666666666666 },
  },
  {
    input: {
      redding: 0.04958333333333333,
      frick: 0.04041666666666666,
      greenbay: 0,
    },
    output: { bravo: 0.04791666666666666 },
  },
  {
    input: {
      redding: 0.043333333333333335,
      frick: 0.04041666666666666,
      greenbay: 0,
    },
    output: { bravo: 0.04791666666666666 },
  },
  {
    input: {
      redding: 0.04958333333333333,
      frick: 0.043750000000000004,
      greenbay: 0.045000000000000005,
    },
    output: { bravo: 0.045000000000000005 },
  },
  {
    input: {
      redding: 0.04125,
      frick: 0.04041666666666666,
      greenbay: 0 },
    output: { bravo: 0.04583333333333334 },
  },
  {
    input: {
      redding: 0.04833333333333333,
      frick: 0.043333333333333335,
      greenbay: 0,
    },
    output: { bravo: 0.042083333333333334 },
  },
  {
    input: {
      redding: 0.041666666666666664,
      frick: 0,
      greenbay: 0
    },
    output: { bravo: 0.046250000000000006 },
  },
  {
    input: {
      redding: 0.04083333333333333,
      frick: 0.042083333333333334,
      greenbay: 0.042083333333333334,
    },
    output: { bravo: 0.04583333333333334 },
  },
  {
    input: {
      redding: 0.04791666666666666,
      frick: 0.043750000000000004,
      greenbay: 0,
    },
    output: { bravo: 0.04833333333333333 },
  },
  {
    input: {
      redding: 0.047499999999999994,
      frick: 0.048749999999999995,
      greenbay: 0,
    },
    output: { bravo: 0.04583333333333334 },
  },
  {
    input: {
      redding: 0.045000000000000005,
      frick: 0.043750000000000004,
      greenbay: 0.0425,
    },
    output: { bravo: 0.04833333333333333 },
  },
  {
    input: {
      redding: 0.04791666666666666,
      frick: 0.04958333333333333,
      greenbay: 0.043750000000000004,
    },
    output: { bravo: 0.04541666666666667 },
  },
  {
    input: {
      redding: 0.042916666666666665,
      frick: 0.047499999999999994,
      greenbay: 0.04041666666666666,
    },
    output: { bravo: 0.04083333333333333 },
  },
  {
    input: {
      redding: 0.045000000000000005,
      frick: 0.042083333333333334,
      greenbay: 0,
    },
    output: { bravo: 0.042916666666666665 },
  },
  {
    input: {
      redding: 0.04541666666666667,
      frick: 0.04041666666666666,
      greenbay: 0,
    },
    output: { bravo: 0.04583333333333334 },
  },
  {
    input: {
      redding: 0.046250000000000006,
      frick: 0.044583333333333336,
      greenbay: 0.04041666666666666,
    },
    output: { bravo: 0.050416666666666665 },
  },
  {
    input: {
      redding: 0.04958333333333333,
      frick: 0.042083333333333334,
      greenbay: 0.045000000000000005,
    },
    output: { bravo: 0.045000000000000005 },
  },
]

net.train(trainingData, {
  log: (e) => console.log(e),
  logPeriod: 100,
  errorThresh: 0.000001,
  iterations: 100000,
})

console.log(
  net.run({
    redding: 0.043750000000000004,
    frick: 0.043750000000000004,
    greenbay: 0.042916666666666665,
  })
)
