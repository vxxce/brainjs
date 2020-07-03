const brain = require('brain.js');

const net = new brain.NeuralNetwork({ hiddenLayers: [2] });

const nums = [...Array(100).fill(0)].map(_ => [Math.random() / 2, Math.random() / 2]);

const sums = nums.map(ns => [ns[0] + ns[1]]);

const trainingData = nums.map((e, i) => {
  return {input: e, output: sums[i]}
});
  

net.train(trainingData, {log: true, logPeriod: 1000, errorThresh: 0.00001, timeout: Infinity, iterations: 1000000});

const stats = net.run([0.3, 0.4])




const hash = str => {
  let hash = 0
  let char = 0
  for (let i in str) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}