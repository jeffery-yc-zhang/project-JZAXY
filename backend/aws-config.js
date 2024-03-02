const AWS = require('aws-sdk');

// Configure the region
AWS.config.update({ region: 'us-east-2' });

// Create S3 service object
const s3 = new AWS.S3({
  accessKeyId: 'AKIAVRUVULPR5BPKS3W6',
  secretAccessKey: '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'
});
