# 英語S1クラス(Mrマグヌソン)の課題の自動化

## 使い方
``` bash
git clone git@github.com:K-REBO/auto_vocab.git

python -m venv auto_vocab
cd ./auto_vocab/


# on bash
source ./bin/activate
# on fish
source ./bin/activate

cd ./src
chmod +x main.sh

./main.sh __path_of_Vocab.xlsx
```

## 依存
主なターゲットはLinux環境
- deno(>=1.34.0)
- Python
  - et-xmlfile==1.1.0
  - openpyxl==3.1.2
- Bash