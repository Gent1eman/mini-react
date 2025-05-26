import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import prettier from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
    // 基础 ESLint 推荐规则
    js.configs.recommended,

    // TypeScript 支持
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"]
    },

    // Prettier 集成
    {
        plugins: {
            prettier
        },
        rules: {
            "prettier/prettier": "error"
        }
    },

    // 全局环境和语言选项
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser, // 浏览器环境
                ...globals.es2021, // ES2021 特性
                ...globals.node, // Node.js 环境
                ...globals.jest // Jest 测试环境
            }
        }
    },

    // TypeScript 解析器配置
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            }
        }
    },

    // 自定义规则
    {
        rules: {
            "no-case-declarations": "off",
            "no-constant-condition": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-var-requires": "off",
            "no-unused-vars": "off"
        }
    }
])
