# aws-serverless-sam
Example SAM application in AWS serverless


Connect to AWS Amplify

https://emshea.com/post/serverless-getting-started

https://dev6648.d2kil5tdpxevin.amplifyapp.com/

https://ghibliapi.vercel.app/#section/Helper-Libraries/Elixir

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html#what-is-sam-cli


```bash
brew install aws-sam-cli
```

```bash
sam init
sam build
```

(select 1, 1)


```bash
sam init --runtime python3.8 --name sam-app --package-type image
```

## Working with the sam template

```bash
sam validate
sam build
sam deploy --guided
```

Run all the pre-commit hooks:

```bash
pre-commit run --all-files
```
