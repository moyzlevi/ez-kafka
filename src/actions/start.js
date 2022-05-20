import ora from 'ora';
import shell from 'shelljs';
import chalk from 'chalk';

const start = async (location) => {

    const pathToKafkaFolder = location || "."
    const spinner = ora('Starting Kafka and Zookeper \n').start();
    
    const startZookeper = shell.exec(`
        ${pathToKafkaFolder}/bin/zookeeper-server-start.sh ${pathToKafkaFolder}/config/zookeeper.properties`);
    
    const startKakfa = shell.exec(`
        ${pathToKafkaFolder}/bin/binkafka-server-start.sh ${pathToKafkaFolder}/config/server.properties`);
    
    spinner.stop();
}

export default start;