export const config = {
  "dev": {
    "username": "udagram01",
    "password": "udagram01",
    "database": "udagram",
    "host": "udagram.cfkhn44eii2q.ap-south-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "ap-south-1b",
    "aws_profile": "default",
    "aws_media_bucket": "arn:aws:s3:::udagram-xmalsan-dev",
    "url": "http://localhost:8080"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "AnyString"
  }

}
