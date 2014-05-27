. (Join-Path -Path $PSScriptRoot -ChildPath "common.ps1").ToString()

$chutzpahPath = (Join-Path -Path $PSScriptRoot -ChildPath "Chutzpah.3.2.1\chutzpah.console.exe").ToString()
If(-not (Test-Path($chutzpahPath)))
{
    Write-Error "Cannot find chutzpath"
    throw
}


$testPath =  Join-Path -Path $PSScriptRoot -ChildPath "..\norvenAnalyticsTests"
If(-not (Test-Path($testPath)))
{
    Write-Error "Cannot find test path"
    throw
}

Write-Host "Executing chutzpah..."
$expression =  "& `"$chutzpahPath`" /path  `"$testPath`" /coverage /teamcity /timeoutMilliseconds 60000 /failOnError"
Exec{Invoke-Expression $expression}
