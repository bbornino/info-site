@REM aws_sync.
@REM If Necessary, run aws_hard_reset.bat then aws_sync.bat, then aws_invalidate.bat
aws s3 sync . s3://info.bornino.net --delete --exclude ".git/*" --exclude "*.bat" --exclude ".vscode/*" --cache-control "no-cache, no-store, must-revalidate"