#!/bin/bash

OUTPUT_FILE="STRUCTURE.md"
ROOT_DIR="."

# Abrir bloque de código Markdown
echo '```bash' > $OUTPUT_FILE

# Función recursiva para imprimir árbol en orden VS Code
function print_tree() {
    local DIR="$1"
    local PREFIX="$2"

    # Carpetas primero
    local folders=($(ls -1p "$DIR" | grep '/$' | sort))
    for folder in "${folders[@]}"; do
        local BASENAME=$(basename "$folder")

        # Ignorar carpetas pesadas
        if [[ "$BASENAME" == ".next" || "$BASENAME" == "node_modules" || "$BASENAME" == ".git" ]]; then
            echo "${PREFIX}|-- $BASENAME" >> $OUTPUT_FILE
            continue
        fi

        echo "${PREFIX}|-- $BASENAME/" >> $OUTPUT_FILE
        print_tree "$DIR/$BASENAME" "$PREFIX|   "
    done

    # Archivos
    local files=($(ls -1p "$DIR" | grep -v '/$' | sort))
    for file in "${files[@]}"; do
        local BASENAME=$(basename "$file")
        echo "${PREFIX}|-- $BASENAME" >> $OUTPUT_FILE
    done
}

# Imprimir raíz
echo "." >> $OUTPUT_FILE
print_tree "$ROOT_DIR" ""

# Cierre bloque de código Markdown
echo '```' >> $OUTPUT_FILE

echo "✅ ¡Árbol creado con Éxito!"