// eslint.config.js

// Импорты плагинов и конфигураций
import js from '@eslint/js' // Базовые правила ESLint
import react from 'eslint-plugin-react' // Правила для React
import reactNative from 'eslint-plugin-react-native' // Правила для React Native
import prettier from 'eslint-plugin-prettier' // Интеграция Prettier в ESLint
import prettierConfig from 'eslint-config-prettier' // Отключает конфликтующие с Prettier правила ESLint
import globals from 'globals' // Глобальные переменные (window, document, console и т.д.)
import tseslint from 'typescript-eslint' // Правила для TypeScript

export default [
    // ======================
    // НАСТРОЙКИ ИГНОРИРОВАНИЯ
    // ======================
    {
        ignores: [
            'node_modules/', // Игнорируем зависимости
            'android/', // Игнорируем нативные Android файлы
            'ios/', // Игнорируем нативные iOS файлы
        ],
    },

    // ===========================
    // ОСНОВНЫЕ НАСТРОЙКИ ФАЙЛОВ
    // ===========================
    {
        files: ['**/*.{ts,tsx,js,jsx}'], // Применять ко всем JS/TS и JSX/TSX файлам
        languageOptions: {
            parser: tseslint.parser, // Парсер для TypeScript
            ecmaVersion: 'latest', // Последняя версия ECMAScript
            sourceType: 'module', // Используем ES-модули
            globals: {
                ...globals.browser, // Глобальные переменные браузера (window, document)
                ...globals.node, // Глобальные переменные Node.js (process, require)
            },
        },
    },

    // ===========================
    // БАЗОВЫЕ КОНФИГУРАЦИИ
    // ===========================
    js.configs.recommended, // Рекомендуемые правила ESLint
    ...tseslint.configs.recommended, // Рекомендуемые правила TypeScript
    react.configs.flat.recommended, // Рекомендуемые правила React (flat config)
    prettierConfig, // Отключает ESLint правила, конфликтующие с Prettier

    // ===========================
    // КАСТОМНЫЕ НАСТРОЙКИ
    // ===========================
    {
        plugins: {
            prettier, // Плагин для интеграции Prettier
            react, // Плагин React
            'react-native': reactNative, // Плагин React Native
        },
        settings: {
            react: {
                version: 'detect', // Автоматически определяет версию React из package.json
            },
        },
        rules: {
            // ======================
            // PRETTIER ПРАВИЛА
            // ======================
            'prettier/prettier': [
                'error', // Уровень ошибки
                {
                    singleQuote: true, // Использовать одинарные кавычки
                    useTabs: false, // Использовать пробелы вместо табов
                    tabWidth: 4, // Ширина отступа 4 пробела
                    semi: false, // Не использовать точку с запятой в конце выражений
                    trailingComma: 'all', // Всегда добавлять trailing запятые
                    bracketSpacing: true, // Пробелы между скобками в объектах { foo: bar }
                    printWidth: 100, // Максимальная длина строки 100 символов
                    endOfLine: 'auto', // Автоматически определять конец строки (LF/CRLF)
                },
            ],

            // ======================
            // REACT ПРАВИЛА
            // ======================
            'react/react-in-jsx-scope': 'off', // Не требовать импорт React в JSX (актуально для React 17+)
            'react-hooks/exhaustive-deps': 'off', // Отключаем проверку зависимостей useEffect

            // ======================
            // REACT NATIVE ПРАВИЛА
            // ======================
            'react-native/no-unused-styles': 2, // Ошибка при неиспользуемых стилях
            'react-native/split-platform-components': 2, // Ошибка при использовании platform-specific компонентов без разделения
            'react-native/no-inline-styles': 2, // Ошибка при inline-стилях (предпочитать StyleSheet)
            'react-native/no-color-literals': 2, // Ошибка при использовании литералов цветов (предпочитать константы)
            'react-native/no-raw-text': 2, // Ошибка при использовании raw Text компонентов
            'react-native/no-single-element-style-arrays': 2, // Ошибка при массивах стилей с одним элементом

            // ======================
            // TYPESCRIPT ПРАВИЛА
            // ======================
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-empty-function': 'off', // Разрешаем пустые функции
            '@typescript-eslint/interface-name-prefix': 'off', // Отключаем префикс 'I' для интерфейсов
            '@typescript-eslint/ban-types': 'off', // Разрешаем все типы
            '@typescript-eslint/explicit-function-return-type': 'off', // Не требовать явный возвращаемый тип у функций
            '@typescript-eslint/explicit-module-boundary-types': 'off', // Не требовать типы у экспортов модулей
            // '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': [
                'error',
                {
                    // разрешить require для загрузки следующих файлов
                    allow: [
                        '\\.(png|jpg|jpeg|gif|svg|webp|bmp)$', // все изображения
                        '\\.(mp4|avi|mov|webm)$', // видео
                        '\\.(mp3|wav|m4a|ogg)$', // аудио
                        '\\.json$', // json файлы
                        '\\.ttf$', // шрифты
                        '\\.otf$', // шрифты
                    ],
                },
            ],
        },
    },
]
