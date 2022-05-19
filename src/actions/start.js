import ora from 'ora';
import shell from 'shelljs';
import chalk from 'chalk';

const start = () => {
    const spinner = ora('Starting kafka and zookeper').start();
    const startZookeper = shell.exec('./zookeeper-server-start.sh');
    const startKakfa = shell.exec('./kafka-server-start.sh');
    spinner.stop();
}

export default start;