# git-workshop用リポジトリ

## ワークショップ前の事前アウトプット  

- .vscode   
VSCODEの設定ファイル → Git管理からは外すのが一般的とのことでしたので、gitignoreファイルへ追加しました.
ファイルに書いただけでは、追跡対象から外れずでした。原因はインデックスが残っていたことでコマンドを復習して対処しました。
`git rm --cached [ファイル名]`  
`git rm -rf --cached [フォルダ名]`  
- calculator  
イベントハンドラーの復習のため作成  
- practice  
DOM操作の復習のため作成  
- emotion_onomatopoeia_dictionary  
DOM操作の復習のため作成 + gitignoreファイルの使い方  
- その他.jsファイルはコーディング問題の内容  

## git branch削除
ローカルで削除  
`git branch -d <branch-name>`

リモートで削除
`git push <remote> --delete <branch>`
