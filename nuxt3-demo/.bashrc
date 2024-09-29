export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Функция для автоматического использования версии Node.js из .nvmrc
auto_nvm_use() {
  if [ -f ".nvmrc" ]; then
    nvm use $(cat .nvmrc) || echo "Failed to switch Node.js version"
  else
    echo ".nvmrc not found in this directory."
  fi
}

# Вызов функции при запуске терминала
auto_nvm_use

# При смене директории (с cd)
cd() {
  builtin cd "$@" || return
  auto_nvm_use
}