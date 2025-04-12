param (
    [switch]$PushAfterCommit = $false
)

# 獲取 git diff 的內容
$diff = git diff --cached

# 檢查是否有暫存的變更
if ([string]::IsNullOrEmpty($diff)) {
    Write-Host "沒有暫存的變更。請先使用 'git add' 添加變更。"
    exit 1
}

# 分析 diff 內容，生成合適的 commit message
$fileChanges = git diff --cached --name-status
$addedFiles = $fileChanges | Where-Object { $_ -match "^A\s+" } | ForEach-Object { $_ -replace "^A\s+", "" }
$modifiedFiles = $fileChanges | Where-Object { $_ -match "^M\s+" } | ForEach-Object { $_ -replace "^M\s+", "" }
$deletedFiles = $fileChanges | Where-Object { $_ -match "^D\s+" } | ForEach-Object { $_ -replace "^D\s+", "" }

# 根據變更類型生成 commit message
$commitType = ""
$commitDesc = ""
$details = @()

if ($addedFiles.Count -gt 0) {
    $commitType = "feat"
    $commitDesc = "新增檔案和功能"
    foreach ($file in $addedFiles) {
        $details += "- 新增檔案: $file"
    }
}
elseif ($modifiedFiles.Count -gt 0) {
    $commitType = "fix"
    $commitDesc = "修改現有功能"
    foreach ($file in $modifiedFiles) {
        $details += "- 更新檔案: $file"
    }
}
elseif ($deletedFiles.Count -gt 0) {
    $commitType = "chore"
    $commitDesc = "移除檔案"
    foreach ($file in $deletedFiles) {
        $details += "- 刪除檔案: $file"
    }
}

# 生成符合格式的 commit message
$commitMessage = "$commitType`: $commitDesc`n`n"
$commitMessage += $details -join "`n"

# 顯示生成的 commit message
Write-Host "生成的 commit message:`n$commitMessage"

# 提交變更
git commit -m $commitMessage

# 如果指定了 -PushAfterCommit 參數，則推送變更
if ($PushAfterCommit) {
    Write-Host "正在推送變更..."
    git push
}

Write-Host "完成！"
