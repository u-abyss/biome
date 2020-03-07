/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {GeneratorMethod} from '../Generator';

const generators: Map<string, GeneratorMethod> = new Map();
export default generators;

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS

import AmbiguousFlowTypeCastExpression from './temp/AmbiguousFlowTypeCastExpression';
generators.set('AmbiguousFlowTypeCastExpression', AmbiguousFlowTypeCastExpression);

import AnyKeywordTypeAnnotation from './types/AnyKeywordTypeAnnotation';
generators.set('AnyKeywordTypeAnnotation', AnyKeywordTypeAnnotation);

import ArrayExpression from './expressions/ArrayExpression';
generators.set('ArrayExpression', ArrayExpression);

import ArrowFunctionExpression from './expressions/ArrowFunctionExpression';
generators.set('ArrowFunctionExpression', ArrowFunctionExpression);

import AssignmentArrayPattern from './patterns/AssignmentArrayPattern';
generators.set('AssignmentArrayPattern', AssignmentArrayPattern);

import AssignmentAssignmentPattern from './patterns/AssignmentAssignmentPattern';
generators.set('AssignmentAssignmentPattern', AssignmentAssignmentPattern);

import AssignmentExpression from './expressions/AssignmentExpression';
generators.set('AssignmentExpression', AssignmentExpression);

import AssignmentIdentifier from './patterns/AssignmentIdentifier';
generators.set('AssignmentIdentifier', AssignmentIdentifier);

import AssignmentObjectPattern from './patterns/AssignmentObjectPattern';
generators.set('AssignmentObjectPattern', AssignmentObjectPattern);

import AssignmentObjectPatternProperty from './patterns/AssignmentObjectPatternProperty';
generators.set('AssignmentObjectPatternProperty', AssignmentObjectPatternProperty);

import AwaitExpression from './expressions/AwaitExpression';
generators.set('AwaitExpression', AwaitExpression);

import BigIntKeywordTypeAnnotation from './types/BigIntKeywordTypeAnnotation';
generators.set('BigIntKeywordTypeAnnotation', BigIntKeywordTypeAnnotation);

import BigIntLiteral from './literals/BigIntLiteral';
generators.set('BigIntLiteral', BigIntLiteral);

import BinaryExpression from './expressions/BinaryExpression';
generators.set('BinaryExpression', BinaryExpression);

import BindingArrayPattern from './patterns/BindingArrayPattern';
generators.set('BindingArrayPattern', BindingArrayPattern);

import BindingAssignmentPattern from './patterns/BindingAssignmentPattern';
generators.set('BindingAssignmentPattern', BindingAssignmentPattern);

import BindingIdentifier from './patterns/BindingIdentifier';
generators.set('BindingIdentifier', BindingIdentifier);

import BindingObjectPattern from './patterns/BindingObjectPattern';
generators.set('BindingObjectPattern', BindingObjectPattern);

import BindingObjectPatternProperty from './patterns/BindingObjectPatternProperty';
generators.set('BindingObjectPatternProperty', BindingObjectPatternProperty);

import BlockStatement from './statements/BlockStatement';
generators.set('BlockStatement', BlockStatement);

import BooleanKeywordTypeAnnotation from './types/BooleanKeywordTypeAnnotation';
generators.set('BooleanKeywordTypeAnnotation', BooleanKeywordTypeAnnotation);

import BooleanLiteral from './literals/BooleanLiteral';
generators.set('BooleanLiteral', BooleanLiteral);

import BooleanLiteralTypeAnnotation from './types/BooleanLiteralTypeAnnotation';
generators.set('BooleanLiteralTypeAnnotation', BooleanLiteralTypeAnnotation);

import BreakStatement from './statements/BreakStatement';
generators.set('BreakStatement', BreakStatement);

import CallExpression from './expressions/CallExpression';
generators.set('CallExpression', CallExpression);

import CatchClause from './auxiliary/CatchClause';
generators.set('CatchClause', CatchClause);

import ClassDeclaration from './classes/ClassDeclaration';
generators.set('ClassDeclaration', ClassDeclaration);

import ClassExpression from './classes/ClassExpression';
generators.set('ClassExpression', ClassExpression);

import ClassHead from './classes/ClassHead';
generators.set('ClassHead', ClassHead);

import ClassMethod from './classes/ClassMethod';
generators.set('ClassMethod', ClassMethod);

import ClassPrivateMethod from './classes/ClassPrivateMethod';
generators.set('ClassPrivateMethod', ClassPrivateMethod);

import ClassPrivateProperty from './classes/ClassPrivateProperty';
generators.set('ClassPrivateProperty', ClassPrivateProperty);

import ClassProperty from './classes/ClassProperty';
generators.set('ClassProperty', ClassProperty);

import ClassPropertyMeta from './classes/ClassPropertyMeta';
generators.set('ClassPropertyMeta', ClassPropertyMeta);

import CommentBlock from './core/CommentBlock';
generators.set('CommentBlock', CommentBlock);

import CommentLine from './core/CommentLine';
generators.set('CommentLine', CommentLine);

import ComputedMemberProperty from './auxiliary/ComputedMemberProperty';
generators.set('ComputedMemberProperty', ComputedMemberProperty);

import ComputedPropertyKey from './objects/ComputedPropertyKey';
generators.set('ComputedPropertyKey', ComputedPropertyKey);

import ConditionalExpression from './expressions/ConditionalExpression';
generators.set('ConditionalExpression', ConditionalExpression);

import ContinueStatement from './statements/ContinueStatement';
generators.set('ContinueStatement', ContinueStatement);

import DebuggerStatement from './statements/DebuggerStatement';
generators.set('DebuggerStatement', DebuggerStatement);

import Directive from './core/Directive';
generators.set('Directive', Directive);

import DoExpression from './expressions/DoExpression';
generators.set('DoExpression', DoExpression);

import DoWhileStatement from './statements/DoWhileStatement';
generators.set('DoWhileStatement', DoWhileStatement);

import EmptyKeywordTypeAnnotation from './types/EmptyKeywordTypeAnnotation';
generators.set('EmptyKeywordTypeAnnotation', EmptyKeywordTypeAnnotation);

import EmptyStatement from './statements/EmptyStatement';
generators.set('EmptyStatement', EmptyStatement);

import ExportAllDeclaration from './modules/ExportAllDeclaration';
generators.set('ExportAllDeclaration', ExportAllDeclaration);

import ExportDefaultDeclaration from './modules/ExportDefaultDeclaration';
generators.set('ExportDefaultDeclaration', ExportDefaultDeclaration);

import ExportDefaultSpecifier from './modules/ExportDefaultSpecifier';
generators.set('ExportDefaultSpecifier', ExportDefaultSpecifier);

import ExportExternalDeclaration from './modules/ExportExternalDeclaration';
generators.set('ExportExternalDeclaration', ExportExternalDeclaration);

import ExportExternalSpecifier from './modules/ExportExternalSpecifier';
generators.set('ExportExternalSpecifier', ExportExternalSpecifier);

import ExportLocalDeclaration from './modules/ExportLocalDeclaration';
generators.set('ExportLocalDeclaration', ExportLocalDeclaration);

import ExportLocalSpecifier from './modules/ExportLocalSpecifier';
generators.set('ExportLocalSpecifier', ExportLocalSpecifier);

import ExportNamespaceSpecifier from './modules/ExportNamespaceSpecifier';
generators.set('ExportNamespaceSpecifier', ExportNamespaceSpecifier);

import ExpressionStatement from './statements/ExpressionStatement';
generators.set('ExpressionStatement', ExpressionStatement);

import FlowArrayTypeAnnotation from './flow/FlowArrayTypeAnnotation';
generators.set('FlowArrayTypeAnnotation', FlowArrayTypeAnnotation);

import FlowClassImplements from './flow/FlowClassImplements';
generators.set('FlowClassImplements', FlowClassImplements);

import FlowDeclareClass from './flow/FlowDeclareClass';
generators.set('FlowDeclareClass', FlowDeclareClass);

import FlowDeclaredPredicate from './flow/FlowDeclaredPredicate';
generators.set('FlowDeclaredPredicate', FlowDeclaredPredicate);

import FlowDeclareExportAll from './flow/FlowDeclareExportAll';
generators.set('FlowDeclareExportAll', FlowDeclareExportAll);

import FlowDeclareExportDefault from './flow/FlowDeclareExportDefault';
generators.set('FlowDeclareExportDefault', FlowDeclareExportDefault);

import FlowDeclareExportNamed from './flow/FlowDeclareExportNamed';
generators.set('FlowDeclareExportNamed', FlowDeclareExportNamed);

import FlowDeclareFunction from './flow/FlowDeclareFunction';
generators.set('FlowDeclareFunction', FlowDeclareFunction);

import FlowDeclareInterface from './flow/FlowDeclareInterface';
generators.set('FlowDeclareInterface', FlowDeclareInterface);

import FlowDeclareModule from './flow/FlowDeclareModule';
generators.set('FlowDeclareModule', FlowDeclareModule);

import FlowDeclareModuleExports from './flow/FlowDeclareModuleExports';
generators.set('FlowDeclareModuleExports', FlowDeclareModuleExports);

import FlowDeclareOpaqueType from './flow/FlowDeclareOpaqueType';
generators.set('FlowDeclareOpaqueType', FlowDeclareOpaqueType);

import FlowDeclareVariable from './flow/FlowDeclareVariable';
generators.set('FlowDeclareVariable', FlowDeclareVariable);

import FlowExistsTypeAnnotation from './flow/FlowExistsTypeAnnotation';
generators.set('FlowExistsTypeAnnotation', FlowExistsTypeAnnotation);

import FlowFunctionTypeAnnotation from './flow/FlowFunctionTypeAnnotation';
generators.set('FlowFunctionTypeAnnotation', FlowFunctionTypeAnnotation);

import FlowFunctionTypeParam from './flow/FlowFunctionTypeParam';
generators.set('FlowFunctionTypeParam', FlowFunctionTypeParam);

import FlowGenericTypeAnnotation from './flow/FlowGenericTypeAnnotation';
generators.set('FlowGenericTypeAnnotation', FlowGenericTypeAnnotation);

import FlowInferredPredicate from './flow/FlowInferredPredicate';
generators.set('FlowInferredPredicate', FlowInferredPredicate);

import FlowInterface from './flow/FlowInterface';
generators.set('FlowInterface', FlowInterface);

import FlowInterfaceDeclaration from './flow/FlowInterfaceDeclaration';
generators.set('FlowInterfaceDeclaration', FlowInterfaceDeclaration);

import FlowInterfaceExtends from './flow/FlowInterfaceExtends';
generators.set('FlowInterfaceExtends', FlowInterfaceExtends);

import FlowInterfaceTypeAnnotation from './flow/FlowInterfaceTypeAnnotation';
generators.set('FlowInterfaceTypeAnnotation', FlowInterfaceTypeAnnotation);

import FlowNullableTypeAnnotation from './flow/FlowNullableTypeAnnotation';
generators.set('FlowNullableTypeAnnotation', FlowNullableTypeAnnotation);

import FlowNumericLiteral from './flow/FlowNumericLiteral';
generators.set('FlowNumericLiteral', FlowNumericLiteral);

import FlowObjectTypeAnnotation from './flow/FlowObjectTypeAnnotation';
generators.set('FlowObjectTypeAnnotation', FlowObjectTypeAnnotation);

import FlowObjectTypeCallProperty from './flow/FlowObjectTypeCallProperty';
generators.set('FlowObjectTypeCallProperty', FlowObjectTypeCallProperty);

import FlowObjectTypeIndexer from './flow/FlowObjectTypeIndexer';
generators.set('FlowObjectTypeIndexer', FlowObjectTypeIndexer);

import FlowObjectTypeInternalSlot from './flow/FlowObjectTypeInternalSlot';
generators.set('FlowObjectTypeInternalSlot', FlowObjectTypeInternalSlot);

import FlowObjectTypeProperty from './flow/FlowObjectTypeProperty';
generators.set('FlowObjectTypeProperty', FlowObjectTypeProperty);

import FlowObjectTypeSpreadProperty from './flow/FlowObjectTypeSpreadProperty';
generators.set('FlowObjectTypeSpreadProperty', FlowObjectTypeSpreadProperty);

import FlowOpaqueType from './flow/FlowOpaqueType';
generators.set('FlowOpaqueType', FlowOpaqueType);

import FlowQualifiedTypeIdentifier from './flow/FlowQualifiedTypeIdentifier';
generators.set('FlowQualifiedTypeIdentifier', FlowQualifiedTypeIdentifier);

import FlowThisTypeAnnotation from './flow/FlowThisTypeAnnotation';
generators.set('FlowThisTypeAnnotation', FlowThisTypeAnnotation);

import FlowTupleTypeAnnotation from './flow/FlowTupleTypeAnnotation';
generators.set('FlowTupleTypeAnnotation', FlowTupleTypeAnnotation);

import FlowTypeCastExpression from './flow/FlowTypeCastExpression';
generators.set('FlowTypeCastExpression', FlowTypeCastExpression);

import FlowTypeofTypeAnnotation from './flow/FlowTypeofTypeAnnotation';
generators.set('FlowTypeofTypeAnnotation', FlowTypeofTypeAnnotation);

import FlowTypeParameter from './flow/FlowTypeParameter';
generators.set('FlowTypeParameter', FlowTypeParameter);

import FlowTypeParameterDeclaration from './flow/FlowTypeParameterDeclaration';
generators.set('FlowTypeParameterDeclaration', FlowTypeParameterDeclaration);

import FlowTypeParameterInstantiation from './flow/FlowTypeParameterInstantiation';
generators.set('FlowTypeParameterInstantiation', FlowTypeParameterInstantiation);

import FlowVariance from './flow/FlowVariance';
generators.set('FlowVariance', FlowVariance);

import ForInStatement from './statements/ForInStatement';
generators.set('ForInStatement', ForInStatement);

import ForOfStatement from './statements/ForOfStatement';
generators.set('ForOfStatement', ForOfStatement);

import ForStatement from './statements/ForStatement';
generators.set('ForStatement', ForStatement);

import FunctionDeclaration from './statements/FunctionDeclaration';
generators.set('FunctionDeclaration', FunctionDeclaration);

import FunctionExpression from './expressions/FunctionExpression';
generators.set('FunctionExpression', FunctionExpression);

import FunctionHead from './auxiliary/FunctionHead';
generators.set('FunctionHead', FunctionHead);

import Identifier from './auxiliary/Identifier';
generators.set('Identifier', Identifier);

import IfStatement from './statements/IfStatement';
generators.set('IfStatement', IfStatement);

import ImportCall from './modules/ImportCall';
generators.set('ImportCall', ImportCall);

import ImportDeclaration from './modules/ImportDeclaration';
generators.set('ImportDeclaration', ImportDeclaration);

import ImportDefaultSpecifier from './modules/ImportDefaultSpecifier';
generators.set('ImportDefaultSpecifier', ImportDefaultSpecifier);

import ImportNamespaceSpecifier from './modules/ImportNamespaceSpecifier';
generators.set('ImportNamespaceSpecifier', ImportNamespaceSpecifier);

import ImportSpecifier from './modules/ImportSpecifier';
generators.set('ImportSpecifier', ImportSpecifier);

import ImportSpecifierLocal from './modules/ImportSpecifierLocal';
generators.set('ImportSpecifierLocal', ImportSpecifierLocal);

import InterpreterDirective from './core/InterpreterDirective';
generators.set('InterpreterDirective', InterpreterDirective);

import IntersectionTypeAnnotation from './types/IntersectionTypeAnnotation';
generators.set('IntersectionTypeAnnotation', IntersectionTypeAnnotation);

import JSXAttribute from './jsx/JSXAttribute';
generators.set('JSXAttribute', JSXAttribute);

import JSXElement from './jsx/JSXElement';
generators.set('JSXElement', JSXElement);

import JSXEmptyExpression from './jsx/JSXEmptyExpression';
generators.set('JSXEmptyExpression', JSXEmptyExpression);

import JSXExpressionContainer from './jsx/JSXExpressionContainer';
generators.set('JSXExpressionContainer', JSXExpressionContainer);

import JSXFragment from './jsx/JSXFragment';
generators.set('JSXFragment', JSXFragment);

import JSXIdentifier from './jsx/JSXIdentifier';
generators.set('JSXIdentifier', JSXIdentifier);

import JSXMemberExpression from './jsx/JSXMemberExpression';
generators.set('JSXMemberExpression', JSXMemberExpression);

import JSXNamespacedName from './jsx/JSXNamespacedName';
generators.set('JSXNamespacedName', JSXNamespacedName);

import JSXReferenceIdentifier from './jsx/JSXReferenceIdentifier';
generators.set('JSXReferenceIdentifier', JSXReferenceIdentifier);

import JSXSpreadAttribute from './jsx/JSXSpreadAttribute';
generators.set('JSXSpreadAttribute', JSXSpreadAttribute);

import JSXSpreadChild from './jsx/JSXSpreadChild';
generators.set('JSXSpreadChild', JSXSpreadChild);

import JSXText from './jsx/JSXText';
generators.set('JSXText', JSXText);

import LabeledStatement from './statements/LabeledStatement';
generators.set('LabeledStatement', LabeledStatement);

import LogicalExpression from './expressions/LogicalExpression';
generators.set('LogicalExpression', LogicalExpression);

import MemberExpression from './expressions/MemberExpression';
generators.set('MemberExpression', MemberExpression);

import MetaProperty from './expressions/MetaProperty';
generators.set('MetaProperty', MetaProperty);

import MixedKeywordTypeAnnotation from './types/MixedKeywordTypeAnnotation';
generators.set('MixedKeywordTypeAnnotation', MixedKeywordTypeAnnotation);

import MockParent from './temp/MockParent';
generators.set('MockParent', MockParent);

import NeverKeywordTypeAnnotation from './types/NeverKeywordTypeAnnotation';
generators.set('NeverKeywordTypeAnnotation', NeverKeywordTypeAnnotation);

import NewExpression from './expressions/NewExpression';
generators.set('NewExpression', NewExpression);

import NullKeywordTypeAnnotation from './types/NullKeywordTypeAnnotation';
generators.set('NullKeywordTypeAnnotation', NullKeywordTypeAnnotation);

import NullLiteral from './literals/NullLiteral';
generators.set('NullLiteral', NullLiteral);

import NumberKeywordTypeAnnotation from './types/NumberKeywordTypeAnnotation';
generators.set('NumberKeywordTypeAnnotation', NumberKeywordTypeAnnotation);

import NumericLiteral from './literals/NumericLiteral';
generators.set('NumericLiteral', NumericLiteral);

import NumericLiteralTypeAnnotation from './types/NumericLiteralTypeAnnotation';
generators.set('NumericLiteralTypeAnnotation', NumericLiteralTypeAnnotation);

import ObjectExpression from './objects/ObjectExpression';
generators.set('ObjectExpression', ObjectExpression);

import ObjectKeywordTypeAnnotation from './types/ObjectKeywordTypeAnnotation';
generators.set('ObjectKeywordTypeAnnotation', ObjectKeywordTypeAnnotation);

import ObjectMethod from './objects/ObjectMethod';
generators.set('ObjectMethod', ObjectMethod);

import ObjectProperty from './objects/ObjectProperty';
generators.set('ObjectProperty', ObjectProperty);

import OptionalCallExpression from './expressions/OptionalCallExpression';
generators.set('OptionalCallExpression', OptionalCallExpression);

import PatternMeta from './patterns/PatternMeta';
generators.set('PatternMeta', PatternMeta);

import PrivateName from './classes/PrivateName';
generators.set('PrivateName', PrivateName);

import Program from './core/Program';
generators.set('Program', Program);

import ReferenceIdentifier from './expressions/ReferenceIdentifier';
generators.set('ReferenceIdentifier', ReferenceIdentifier);

import RegExpAlternation from './regex/RegExpAlternation';
generators.set('RegExpAlternation', RegExpAlternation);

import RegExpAnyCharacter from './regex/RegExpAnyCharacter';
generators.set('RegExpAnyCharacter', RegExpAnyCharacter);

import RegExpCharacter from './regex/RegExpCharacter';
generators.set('RegExpCharacter', RegExpCharacter);

import RegExpCharSet from './regex/RegExpCharSet';
generators.set('RegExpCharSet', RegExpCharSet);

import RegExpCharSetRange from './regex/RegExpCharSetRange';
generators.set('RegExpCharSetRange', RegExpCharSetRange);

import RegExpControlCharacter from './regex/RegExpControlCharacter';
generators.set('RegExpControlCharacter', RegExpControlCharacter);

import RegExpDigitCharacter from './regex/RegExpDigitCharacter';
generators.set('RegExpDigitCharacter', RegExpDigitCharacter);

import RegExpEndCharacter from './regex/RegExpEndCharacter';
generators.set('RegExpEndCharacter', RegExpEndCharacter);

import RegExpGroupCapture from './regex/RegExpGroupCapture';
generators.set('RegExpGroupCapture', RegExpGroupCapture);

import RegExpGroupNonCapture from './regex/RegExpGroupNonCapture';
generators.set('RegExpGroupNonCapture', RegExpGroupNonCapture);

import RegExpLiteral from './literals/RegExpLiteral';
generators.set('RegExpLiteral', RegExpLiteral);

import RegExpNonDigitCharacter from './regex/RegExpNonDigitCharacter';
generators.set('RegExpNonDigitCharacter', RegExpNonDigitCharacter);

import RegExpNonWhiteSpaceCharacter from './regex/RegExpNonWhiteSpaceCharacter';
generators.set('RegExpNonWhiteSpaceCharacter', RegExpNonWhiteSpaceCharacter);

import RegExpNonWordBoundaryCharacter from './regex/RegExpNonWordBoundaryCharacter';
generators.set('RegExpNonWordBoundaryCharacter', RegExpNonWordBoundaryCharacter);

import RegExpNonWordCharacter from './regex/RegExpNonWordCharacter';
generators.set('RegExpNonWordCharacter', RegExpNonWordCharacter);

import RegExpQuantified from './regex/RegExpQuantified';
generators.set('RegExpQuantified', RegExpQuantified);

import RegExpStartCharacter from './regex/RegExpStartCharacter';
generators.set('RegExpStartCharacter', RegExpStartCharacter);

import RegExpSubExpression from './regex/RegExpSubExpression';
generators.set('RegExpSubExpression', RegExpSubExpression);

import RegExpWhiteSpaceCharacter from './regex/RegExpWhiteSpaceCharacter';
generators.set('RegExpWhiteSpaceCharacter', RegExpWhiteSpaceCharacter);

import RegExpWordBoundaryCharacter from './regex/RegExpWordBoundaryCharacter';
generators.set('RegExpWordBoundaryCharacter', RegExpWordBoundaryCharacter);

import RegExpWordCharacter from './regex/RegExpWordCharacter';
generators.set('RegExpWordCharacter', RegExpWordCharacter);

import ReturnStatement from './statements/ReturnStatement';
generators.set('ReturnStatement', ReturnStatement);

import SequenceExpression from './expressions/SequenceExpression';
generators.set('SequenceExpression', SequenceExpression);

import SpreadElement from './auxiliary/SpreadElement';
generators.set('SpreadElement', SpreadElement);

import SpreadProperty from './objects/SpreadProperty';
generators.set('SpreadProperty', SpreadProperty);

import StaticMemberProperty from './auxiliary/StaticMemberProperty';
generators.set('StaticMemberProperty', StaticMemberProperty);

import StaticPropertyKey from './objects/StaticPropertyKey';
generators.set('StaticPropertyKey', StaticPropertyKey);

import StringKeywordTypeAnnotation from './types/StringKeywordTypeAnnotation';
generators.set('StringKeywordTypeAnnotation', StringKeywordTypeAnnotation);

import StringLiteral from './literals/StringLiteral';
generators.set('StringLiteral', StringLiteral);

import StringLiteralTypeAnnotation from './types/StringLiteralTypeAnnotation';
generators.set('StringLiteralTypeAnnotation', StringLiteralTypeAnnotation);

import Super from './expressions/Super';
generators.set('Super', Super);

import SwitchCase from './auxiliary/SwitchCase';
generators.set('SwitchCase', SwitchCase);

import SwitchStatement from './statements/SwitchStatement';
generators.set('SwitchStatement', SwitchStatement);

import SymbolKeywordTypeAnnotation from './types/SymbolKeywordTypeAnnotation';
generators.set('SymbolKeywordTypeAnnotation', SymbolKeywordTypeAnnotation);

import TaggedTemplateExpression from './expressions/TaggedTemplateExpression';
generators.set('TaggedTemplateExpression', TaggedTemplateExpression);

import TemplateElement from './auxiliary/TemplateElement';
generators.set('TemplateElement', TemplateElement);

import TemplateLiteral from './literals/TemplateLiteral';
generators.set('TemplateLiteral', TemplateLiteral);

import TemplateLiteralTypeAnnotation from './types/TemplateLiteralTypeAnnotation';
generators.set('TemplateLiteralTypeAnnotation', TemplateLiteralTypeAnnotation);

import ThisExpression from './expressions/ThisExpression';
generators.set('ThisExpression', ThisExpression);

import ThrowStatement from './statements/ThrowStatement';
generators.set('ThrowStatement', ThrowStatement);

import TryStatement from './statements/TryStatement';
generators.set('TryStatement', TryStatement);

import TSArrayType from './typescript/TSArrayType';
generators.set('TSArrayType', TSArrayType);

import TSAsExpression from './typescript/TSAsExpression';
generators.set('TSAsExpression', TSAsExpression);

import TSAssignmentAsExpression from './typescript/TSAssignmentAsExpression';
generators.set('TSAssignmentAsExpression', TSAssignmentAsExpression);

import TSAssignmentNonNullExpression from './typescript/TSAssignmentNonNullExpression';
generators.set('TSAssignmentNonNullExpression', TSAssignmentNonNullExpression);

import TSAssignmentTypeAssertion from './typescript/TSAssignmentTypeAssertion';
generators.set('TSAssignmentTypeAssertion', TSAssignmentTypeAssertion);

import TSCallSignatureDeclaration from './typescript/TSCallSignatureDeclaration';
generators.set('TSCallSignatureDeclaration', TSCallSignatureDeclaration);

import TSConditionalType from './typescript/TSConditionalType';
generators.set('TSConditionalType', TSConditionalType);

import TSConstructorType from './typescript/TSConstructorType';
generators.set('TSConstructorType', TSConstructorType);

import TSConstructSignatureDeclaration from './typescript/TSConstructSignatureDeclaration';
generators.set('TSConstructSignatureDeclaration', TSConstructSignatureDeclaration);

import TSDeclareFunction from './typescript/TSDeclareFunction';
generators.set('TSDeclareFunction', TSDeclareFunction);

import TSDeclareMethod from './typescript/TSDeclareMethod';
generators.set('TSDeclareMethod', TSDeclareMethod);

import TSEnumDeclaration from './typescript/TSEnumDeclaration';
generators.set('TSEnumDeclaration', TSEnumDeclaration);

import TSEnumMember from './typescript/TSEnumMember';
generators.set('TSEnumMember', TSEnumMember);

import TSExportAssignment from './typescript/TSExportAssignment';
generators.set('TSExportAssignment', TSExportAssignment);

import TSExpressionWithTypeArguments from './typescript/TSExpressionWithTypeArguments';
generators.set('TSExpressionWithTypeArguments', TSExpressionWithTypeArguments);

import TSExternalModuleReference from './typescript/TSExternalModuleReference';
generators.set('TSExternalModuleReference', TSExternalModuleReference);

import TSFunctionType from './typescript/TSFunctionType';
generators.set('TSFunctionType', TSFunctionType);

import TSImportEqualsDeclaration from './typescript/TSImportEqualsDeclaration';
generators.set('TSImportEqualsDeclaration', TSImportEqualsDeclaration);

import TSImportType from './typescript/TSImportType';
generators.set('TSImportType', TSImportType);

import TSIndexedAccessType from './typescript/TSIndexedAccessType';
generators.set('TSIndexedAccessType', TSIndexedAccessType);

import TSIndexSignature from './typescript/TSIndexSignature';
generators.set('TSIndexSignature', TSIndexSignature);

import TSInferType from './typescript/TSInferType';
generators.set('TSInferType', TSInferType);

import TSInterfaceBody from './typescript/TSInterfaceBody';
generators.set('TSInterfaceBody', TSInterfaceBody);

import TSInterfaceDeclaration from './typescript/TSInterfaceDeclaration';
generators.set('TSInterfaceDeclaration', TSInterfaceDeclaration);

import TSMappedType from './typescript/TSMappedType';
generators.set('TSMappedType', TSMappedType);

import TSMethodSignature from './typescript/TSMethodSignature';
generators.set('TSMethodSignature', TSMethodSignature);

import TSModuleBlock from './typescript/TSModuleBlock';
generators.set('TSModuleBlock', TSModuleBlock);

import TSModuleDeclaration from './typescript/TSModuleDeclaration';
generators.set('TSModuleDeclaration', TSModuleDeclaration);

import TSNamespaceExportDeclaration from './typescript/TSNamespaceExportDeclaration';
generators.set('TSNamespaceExportDeclaration', TSNamespaceExportDeclaration);

import TSNonNullExpression from './typescript/TSNonNullExpression';
generators.set('TSNonNullExpression', TSNonNullExpression);

import TSOptionalType from './typescript/TSOptionalType';
generators.set('TSOptionalType', TSOptionalType);

import TSParenthesizedType from './typescript/TSParenthesizedType';
generators.set('TSParenthesizedType', TSParenthesizedType);

import TSPropertySignature from './typescript/TSPropertySignature';
generators.set('TSPropertySignature', TSPropertySignature);

import TSQualifiedName from './typescript/TSQualifiedName';
generators.set('TSQualifiedName', TSQualifiedName);

import TSSignatureDeclarationMeta from './typescript/TSSignatureDeclarationMeta';
generators.set('TSSignatureDeclarationMeta', TSSignatureDeclarationMeta);

import TSThisType from './typescript/TSThisType';
generators.set('TSThisType', TSThisType);

import TSTupleType from './typescript/TSTupleType';
generators.set('TSTupleType', TSTupleType);

import TSTypeAssertion from './typescript/TSTypeAssertion';
generators.set('TSTypeAssertion', TSTypeAssertion);

import TSTypeLiteral from './typescript/TSTypeLiteral';
generators.set('TSTypeLiteral', TSTypeLiteral);

import TSTypeOperator from './typescript/TSTypeOperator';
generators.set('TSTypeOperator', TSTypeOperator);

import TSTypeParameter from './typescript/TSTypeParameter';
generators.set('TSTypeParameter', TSTypeParameter);

import TSTypeParameterDeclaration from './typescript/TSTypeParameterDeclaration';
generators.set('TSTypeParameterDeclaration', TSTypeParameterDeclaration);

import TSTypeParameterInstantiation from './typescript/TSTypeParameterInstantiation';
generators.set('TSTypeParameterInstantiation', TSTypeParameterInstantiation);

import TSTypePredicate from './typescript/TSTypePredicate';
generators.set('TSTypePredicate', TSTypePredicate);

import TSTypeQuery from './typescript/TSTypeQuery';
generators.set('TSTypeQuery', TSTypeQuery);

import TSTypeReference from './typescript/TSTypeReference';
generators.set('TSTypeReference', TSTypeReference);

import TypeAliasTypeAnnotation from './types/TypeAliasTypeAnnotation';
generators.set('TypeAliasTypeAnnotation', TypeAliasTypeAnnotation);

import UnaryExpression from './expressions/UnaryExpression';
generators.set('UnaryExpression', UnaryExpression);

import UndefinedKeywordTypeAnnotation from './types/UndefinedKeywordTypeAnnotation';
generators.set('UndefinedKeywordTypeAnnotation', UndefinedKeywordTypeAnnotation);

import UnionTypeAnnotation from './types/UnionTypeAnnotation';
generators.set('UnionTypeAnnotation', UnionTypeAnnotation);

import UnknownKeywordTypeAnnotation from './types/UnknownKeywordTypeAnnotation';
generators.set('UnknownKeywordTypeAnnotation', UnknownKeywordTypeAnnotation);

import UpdateExpression from './expressions/UpdateExpression';
generators.set('UpdateExpression', UpdateExpression);

import VariableDeclaration from './auxiliary/VariableDeclaration';
generators.set('VariableDeclaration', VariableDeclaration);

import VariableDeclarationStatement from './statements/VariableDeclarationStatement';
generators.set('VariableDeclarationStatement', VariableDeclarationStatement);

import VariableDeclarator from './auxiliary/VariableDeclarator';
generators.set('VariableDeclarator', VariableDeclarator);

import VoidKeywordTypeAnnotation from './types/VoidKeywordTypeAnnotation';
generators.set('VoidKeywordTypeAnnotation', VoidKeywordTypeAnnotation);

import WhileStatement from './statements/WhileStatement';
generators.set('WhileStatement', WhileStatement);

import WithStatement from './statements/WithStatement';
generators.set('WithStatement', WithStatement);

import YieldExpression from './expressions/YieldExpression';
generators.set('YieldExpression', YieldExpression);
