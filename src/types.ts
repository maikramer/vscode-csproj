import {Memento} from 'vscode'

export interface Csproj {
    fsPath: string
    name: string
    xml: XML
}

export interface CsprojAndFile {
    csproj: Csproj
    filePath: string
}

export interface ActionArgs extends CsprojAndFile {
    fileName: string
    globalState: Memento
}

export type ItemType = string | { [extension: string]: string }

export interface XMLElement {
    find(xpath: string): XMLElement
    findall(xpath: string): XMLElement[]
    remove(child: XMLElement): void
}

export interface XML {
    getroot(): XMLElement
    write(opts: any): string
}
