function Exec
{
    [CmdletBinding()]
    param (
        [Parameter(Position=0, Mandatory=1)]
        [scriptblock]$Command,
        [Parameter(Position=1, Mandatory=0)]
        [string]$ErrorMessage = "Execution of command failed.`n$Command"
    )
    & $Command
    if ($LastExitCode -ne 0) {
        throw
    }
}

trap
{
    Write-Error $_
    write-host "##teamcity[message text='build failed' errorDetails='details' status='ERROR']"
    Exit 1
}
