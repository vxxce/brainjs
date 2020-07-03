const brain = require('brain.js')

const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const trainingData = [
  {input: [1, 1], output: [0]},
  {input: [1, 0], output: [1]},
  {input: [0, 0], output: [0]},
  {input: [0, 1], output: [1]},
]

net.train(trainingData, {
  log: e => console.log(e),
  logPeriod: 100
})

console.log(net.run([1, 0]))
