#!/usr/bin/env bash

# ==================================================================================================
# Required preset env vars
# ==================================================================================================
# ROLLBAR_ENDPOINT:
#   The endpoint to send rollbar webhooks
#   Default: https://api.rollbar.com/api/1/deploy/
# ROLLBAR_ACCESS_TOKEN_SERVER:
#   The access token for the project on Rollbar
# STATUS: 
#   The github action job status
#   You can get this with `${{ job.status }}`
# GH_MESSAGE: 
#   The commit message of the commit to show as code block in the slack message
#   You can get this with `${{ github.event.commits[0].message }}`
# GH_ACTOR: 
#   The person to show as the responsible for the commit
#   You can get this with `${{ github.actor }}`
# GH_SHA: 
#   The sha of the commit
#   You can get this with `${{ github.sha }}`
# APP_ENVIRONMENT:
#   The application environment, usually `production` or `staging`
#   Default: production

# App environment
DEFAULT_APP_ENVIRONMENT="production"
APP_ENVIRONMENT="${APP_ENVIRONMENT:-$DEFAULT_APP_ENVIRONMENT}"

# Rollbar endpoint
DEFAULT_ROLLBAR_ENDPOINT="https://api.rollbar.com/api/1/deploy/"
ROLLBAR_ENDPOINT="${ROLLBAR_ENDPOINT:-$DEFAULT_ROLLBAR_ENDPOINT}"
STATUS=`echo $STATUS | tr '[A-Z]' '[a-z]'`


if [[ $STATUS = "success" ]]
then
  DEPLOY_STATUS="succeeded"
else
  DEPLOY_STATUS="failed"
fi


curl -X POST "$ROLLBAR_ENDPOINT" \
  -F access_token="$ROLLBAR_ACCESS_TOKEN_SERVER" \
  -F environment="$APP_ENVIRONMENT" \
  -F revision="$GH_SHA" \
  -F local_username="$GH_ACTOR" \
  -F comment="$GH_MESSAGE" \
  -F status="$DEPLOY_STATUS"
