pipeline {
    /* insert Declarative Pipeline here */
    agent any
    stages {
        stage('Deploy/Build App') {
            steps {
                bat '''
                    echo 'Application deployed successfully'
                '''
            }
        }
        stage('Frontend tests') {
            steps {
                bat '''
                    cd frontend-project/
                    npm install && npm run cypress:run
                '''
                archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend-project/cypress/videos/**', followSymlinks: false
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: 'frontend-project/mochawesome-report',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Frontend report',
                    reportTitles: ''
                ])
            }
        }
        stage('Backend tests') {
            steps {
                bat '''
                    cd backend-project/
                    npm install && npm run test:report:regression
                '''
                archiveArtifacts allowEmptyArchive: true, artifacts: 'backend-project/cypress/videos/**', followSymlinks: false
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: 'backend-project/mochawesome-report',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Backend report',
                    reportTitles: ''
                ])
            }
        }
        stage('Performance tests') {
            steps {
                bat '''
                    cd performance-tests/
                    del /f "test1.csv" && rmdir /Q /S "html-reports/"
                    C:/Users/uzab/apache-jmeter-5.4.1/bin/jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: 'performance-tests/html-reports',
                    reportFiles: 'index.html',
                    reportName: 'JMeter dashboard report',
                    reportTitles: ''
                ])
            }
        }
    }
}