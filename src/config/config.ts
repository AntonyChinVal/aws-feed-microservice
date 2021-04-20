export const config = {
  'dbUsername': process.env.AWS_POSTGRES_USERNAME,
  'dbPassword': process.env.AWS_POSTGRES_PASSWORD,
  'dbName': process.env.AWS_POSTGRES_DB,
  'dbHost': process.env.AWS_POSTGRES_HOST,
  'dbDialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_MEDIA_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.AWS_JWT_SECRET,
  },
};