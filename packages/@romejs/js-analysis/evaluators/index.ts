/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Hub from '../Hub';
import {Scope} from '../scopes';
import {AnyNode} from '@romejs/js-ast';
import T from '../types/T';

const evaluators: Map<
  string,
  (node: AnyNode, scope: Scope, hub: Hub) => void | undefined | T
> = new Map();
export default evaluators;

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS

import AmbiguousFlowTypeCastExpression from './temp/AmbiguousFlowTypeCastExpression';
evaluators.set('AmbiguousFlowTypeCastExpression', AmbiguousFlowTypeCastExpression);

import AnyKeywordTypeAnnotation from './types/AnyKeywordTypeAnnotation';
evaluators.set('AnyKeywordTypeAnnotation', AnyKeywordTypeAnnotation);

import ArrayExpression from './expressions/ArrayExpression';
evaluators.set('ArrayExpression', ArrayExpression);

import ArrowFunctionExpression from './expressions/ArrowFunctionExpression';
evaluators.set('ArrowFunctionExpression', ArrowFunctionExpression);

import AssignmentArrayPattern from './patterns/AssignmentArrayPattern';
evaluators.set('AssignmentArrayPattern', AssignmentArrayPattern);

import AssignmentAssignmentPattern from './patterns/AssignmentAssignmentPattern';
evaluators.set('AssignmentAssignmentPattern', AssignmentAssignmentPattern);

import AssignmentExpression from './expressions/AssignmentExpression';
evaluators.set('AssignmentExpression', AssignmentExpression);

import AssignmentIdentifier from './patterns/AssignmentIdentifier';
evaluators.set('AssignmentIdentifier', AssignmentIdentifier);

import AssignmentObjectPattern from './patterns/AssignmentObjectPattern';
evaluators.set('AssignmentObjectPattern', AssignmentObjectPattern);

import AssignmentObjectPatternProperty from './patterns/AssignmentObjectPatternProperty';
evaluators.set('AssignmentObjectPatternProperty', AssignmentObjectPatternProperty);

import AwaitExpression from './expressions/AwaitExpression';
evaluators.set('AwaitExpression', AwaitExpression);

import BigIntKeywordTypeAnnotation from './types/BigIntKeywordTypeAnnotation';
evaluators.set('BigIntKeywordTypeAnnotation', BigIntKeywordTypeAnnotation);

import BigIntLiteral from './literals/BigIntLiteral';
evaluators.set('BigIntLiteral', BigIntLiteral);

import BinaryExpression from './expressions/BinaryExpression';
evaluators.set('BinaryExpression', BinaryExpression);

import BindingArrayPattern from './patterns/BindingArrayPattern';
evaluators.set('BindingArrayPattern', BindingArrayPattern);

import BindingAssignmentPattern from './patterns/BindingAssignmentPattern';
evaluators.set('BindingAssignmentPattern', BindingAssignmentPattern);

import BindingIdentifier from './patterns/BindingIdentifier';
evaluators.set('BindingIdentifier', BindingIdentifier);

import BindingObjectPattern from './patterns/BindingObjectPattern';
evaluators.set('BindingObjectPattern', BindingObjectPattern);

import BindingObjectPatternProperty from './patterns/BindingObjectPatternProperty';
evaluators.set('BindingObjectPatternProperty', BindingObjectPatternProperty);

import BlockStatement from './statements/BlockStatement';
evaluators.set('BlockStatement', BlockStatement);

import BooleanKeywordTypeAnnotation from './types/BooleanKeywordTypeAnnotation';
evaluators.set('BooleanKeywordTypeAnnotation', BooleanKeywordTypeAnnotation);

import BooleanLiteral from './literals/BooleanLiteral';
evaluators.set('BooleanLiteral', BooleanLiteral);

import BooleanLiteralTypeAnnotation from './types/BooleanLiteralTypeAnnotation';
evaluators.set('BooleanLiteralTypeAnnotation', BooleanLiteralTypeAnnotation);

import BreakStatement from './statements/BreakStatement';
evaluators.set('BreakStatement', BreakStatement);

import CallExpression from './expressions/CallExpression';
evaluators.set('CallExpression', CallExpression);

import CatchClause from './auxiliary/CatchClause';
evaluators.set('CatchClause', CatchClause);

import ClassDeclaration from './classes/ClassDeclaration';
evaluators.set('ClassDeclaration', ClassDeclaration);

import ClassExpression from './classes/ClassExpression';
evaluators.set('ClassExpression', ClassExpression);

import ClassHead from './classes/ClassHead';
evaluators.set('ClassHead', ClassHead);

import ClassMethod from './classes/ClassMethod';
evaluators.set('ClassMethod', ClassMethod);

import ClassPrivateMethod from './classes/ClassPrivateMethod';
evaluators.set('ClassPrivateMethod', ClassPrivateMethod);

import ClassPrivateProperty from './classes/ClassPrivateProperty';
evaluators.set('ClassPrivateProperty', ClassPrivateProperty);

import ClassProperty from './classes/ClassProperty';
evaluators.set('ClassProperty', ClassProperty);

import ClassPropertyMeta from './classes/ClassPropertyMeta';
evaluators.set('ClassPropertyMeta', ClassPropertyMeta);

import CommentBlock from './core/CommentBlock';
evaluators.set('CommentBlock', CommentBlock);

import CommentLine from './core/CommentLine';
evaluators.set('CommentLine', CommentLine);

import ComputedMemberProperty from './auxiliary/ComputedMemberProperty';
evaluators.set('ComputedMemberProperty', ComputedMemberProperty);

import ComputedPropertyKey from './objects/ComputedPropertyKey';
evaluators.set('ComputedPropertyKey', ComputedPropertyKey);

import ConditionalExpression from './expressions/ConditionalExpression';
evaluators.set('ConditionalExpression', ConditionalExpression);

import ContinueStatement from './statements/ContinueStatement';
evaluators.set('ContinueStatement', ContinueStatement);

import DebuggerStatement from './statements/DebuggerStatement';
evaluators.set('DebuggerStatement', DebuggerStatement);

import Directive from './core/Directive';
evaluators.set('Directive', Directive);

import DoExpression from './expressions/DoExpression';
evaluators.set('DoExpression', DoExpression);

import DoWhileStatement from './statements/DoWhileStatement';
evaluators.set('DoWhileStatement', DoWhileStatement);

import EmptyKeywordTypeAnnotation from './types/EmptyKeywordTypeAnnotation';
evaluators.set('EmptyKeywordTypeAnnotation', EmptyKeywordTypeAnnotation);

import EmptyStatement from './statements/EmptyStatement';
evaluators.set('EmptyStatement', EmptyStatement);

import ExportAllDeclaration from './modules/ExportAllDeclaration';
evaluators.set('ExportAllDeclaration', ExportAllDeclaration);

import ExportDefaultDeclaration from './modules/ExportDefaultDeclaration';
evaluators.set('ExportDefaultDeclaration', ExportDefaultDeclaration);

import ExportDefaultSpecifier from './modules/ExportDefaultSpecifier';
evaluators.set('ExportDefaultSpecifier', ExportDefaultSpecifier);

import ExportExternalDeclaration from './modules/ExportExternalDeclaration';
evaluators.set('ExportExternalDeclaration', ExportExternalDeclaration);

import ExportExternalSpecifier from './modules/ExportExternalSpecifier';
evaluators.set('ExportExternalSpecifier', ExportExternalSpecifier);

import ExportLocalDeclaration from './modules/ExportLocalDeclaration';
evaluators.set('ExportLocalDeclaration', ExportLocalDeclaration);

import ExportLocalSpecifier from './modules/ExportLocalSpecifier';
evaluators.set('ExportLocalSpecifier', ExportLocalSpecifier);

import ExportNamespaceSpecifier from './modules/ExportNamespaceSpecifier';
evaluators.set('ExportNamespaceSpecifier', ExportNamespaceSpecifier);

import ExpressionStatement from './statements/ExpressionStatement';
evaluators.set('ExpressionStatement', ExpressionStatement);

import FlowArrayTypeAnnotation from './flow/FlowArrayTypeAnnotation';
evaluators.set('FlowArrayTypeAnnotation', FlowArrayTypeAnnotation);

import FlowClassImplements from './flow/FlowClassImplements';
evaluators.set('FlowClassImplements', FlowClassImplements);

import FlowDeclareClass from './flow/FlowDeclareClass';
evaluators.set('FlowDeclareClass', FlowDeclareClass);

import FlowDeclaredPredicate from './flow/FlowDeclaredPredicate';
evaluators.set('FlowDeclaredPredicate', FlowDeclaredPredicate);

import FlowDeclareExportAll from './flow/FlowDeclareExportAll';
evaluators.set('FlowDeclareExportAll', FlowDeclareExportAll);

import FlowDeclareExportDefault from './flow/FlowDeclareExportDefault';
evaluators.set('FlowDeclareExportDefault', FlowDeclareExportDefault);

import FlowDeclareExportNamed from './flow/FlowDeclareExportNamed';
evaluators.set('FlowDeclareExportNamed', FlowDeclareExportNamed);

import FlowDeclareFunction from './flow/FlowDeclareFunction';
evaluators.set('FlowDeclareFunction', FlowDeclareFunction);

import FlowDeclareInterface from './flow/FlowDeclareInterface';
evaluators.set('FlowDeclareInterface', FlowDeclareInterface);

import FlowDeclareModule from './flow/FlowDeclareModule';
evaluators.set('FlowDeclareModule', FlowDeclareModule);

import FlowDeclareModuleExports from './flow/FlowDeclareModuleExports';
evaluators.set('FlowDeclareModuleExports', FlowDeclareModuleExports);

import FlowDeclareOpaqueType from './flow/FlowDeclareOpaqueType';
evaluators.set('FlowDeclareOpaqueType', FlowDeclareOpaqueType);

import FlowDeclareVariable from './flow/FlowDeclareVariable';
evaluators.set('FlowDeclareVariable', FlowDeclareVariable);

import FlowExistsTypeAnnotation from './flow/FlowExistsTypeAnnotation';
evaluators.set('FlowExistsTypeAnnotation', FlowExistsTypeAnnotation);

import FlowFunctionTypeAnnotation from './flow/FlowFunctionTypeAnnotation';
evaluators.set('FlowFunctionTypeAnnotation', FlowFunctionTypeAnnotation);

import FlowFunctionTypeParam from './flow/FlowFunctionTypeParam';
evaluators.set('FlowFunctionTypeParam', FlowFunctionTypeParam);

import FlowGenericTypeAnnotation from './flow/FlowGenericTypeAnnotation';
evaluators.set('FlowGenericTypeAnnotation', FlowGenericTypeAnnotation);

import FlowInferredPredicate from './flow/FlowInferredPredicate';
evaluators.set('FlowInferredPredicate', FlowInferredPredicate);

import FlowInterface from './flow/FlowInterface';
evaluators.set('FlowInterface', FlowInterface);

import FlowInterfaceDeclaration from './flow/FlowInterfaceDeclaration';
evaluators.set('FlowInterfaceDeclaration', FlowInterfaceDeclaration);

import FlowInterfaceExtends from './flow/FlowInterfaceExtends';
evaluators.set('FlowInterfaceExtends', FlowInterfaceExtends);

import FlowInterfaceTypeAnnotation from './flow/FlowInterfaceTypeAnnotation';
evaluators.set('FlowInterfaceTypeAnnotation', FlowInterfaceTypeAnnotation);

import FlowNullableTypeAnnotation from './flow/FlowNullableTypeAnnotation';
evaluators.set('FlowNullableTypeAnnotation', FlowNullableTypeAnnotation);

import FlowNumericLiteral from './flow/FlowNumericLiteral';
evaluators.set('FlowNumericLiteral', FlowNumericLiteral);

import FlowObjectTypeAnnotation from './flow/FlowObjectTypeAnnotation';
evaluators.set('FlowObjectTypeAnnotation', FlowObjectTypeAnnotation);

import FlowObjectTypeCallProperty from './flow/FlowObjectTypeCallProperty';
evaluators.set('FlowObjectTypeCallProperty', FlowObjectTypeCallProperty);

import FlowObjectTypeIndexer from './flow/FlowObjectTypeIndexer';
evaluators.set('FlowObjectTypeIndexer', FlowObjectTypeIndexer);

import FlowObjectTypeInternalSlot from './flow/FlowObjectTypeInternalSlot';
evaluators.set('FlowObjectTypeInternalSlot', FlowObjectTypeInternalSlot);

import FlowObjectTypeProperty from './flow/FlowObjectTypeProperty';
evaluators.set('FlowObjectTypeProperty', FlowObjectTypeProperty);

import FlowObjectTypeSpreadProperty from './flow/FlowObjectTypeSpreadProperty';
evaluators.set('FlowObjectTypeSpreadProperty', FlowObjectTypeSpreadProperty);

import FlowOpaqueType from './flow/FlowOpaqueType';
evaluators.set('FlowOpaqueType', FlowOpaqueType);

import FlowQualifiedTypeIdentifier from './flow/FlowQualifiedTypeIdentifier';
evaluators.set('FlowQualifiedTypeIdentifier', FlowQualifiedTypeIdentifier);

import FlowThisTypeAnnotation from './flow/FlowThisTypeAnnotation';
evaluators.set('FlowThisTypeAnnotation', FlowThisTypeAnnotation);

import FlowTupleTypeAnnotation from './flow/FlowTupleTypeAnnotation';
evaluators.set('FlowTupleTypeAnnotation', FlowTupleTypeAnnotation);

import FlowTypeCastExpression from './flow/FlowTypeCastExpression';
evaluators.set('FlowTypeCastExpression', FlowTypeCastExpression);

import FlowTypeofTypeAnnotation from './flow/FlowTypeofTypeAnnotation';
evaluators.set('FlowTypeofTypeAnnotation', FlowTypeofTypeAnnotation);

import FlowTypeParameter from './flow/FlowTypeParameter';
evaluators.set('FlowTypeParameter', FlowTypeParameter);

import FlowTypeParameterDeclaration from './flow/FlowTypeParameterDeclaration';
evaluators.set('FlowTypeParameterDeclaration', FlowTypeParameterDeclaration);

import FlowTypeParameterInstantiation from './flow/FlowTypeParameterInstantiation';
evaluators.set('FlowTypeParameterInstantiation', FlowTypeParameterInstantiation);

import FlowVariance from './flow/FlowVariance';
evaluators.set('FlowVariance', FlowVariance);

import ForInStatement from './statements/ForInStatement';
evaluators.set('ForInStatement', ForInStatement);

import ForOfStatement from './statements/ForOfStatement';
evaluators.set('ForOfStatement', ForOfStatement);

import ForStatement from './statements/ForStatement';
evaluators.set('ForStatement', ForStatement);

import FunctionDeclaration from './statements/FunctionDeclaration';
evaluators.set('FunctionDeclaration', FunctionDeclaration);

import FunctionExpression from './expressions/FunctionExpression';
evaluators.set('FunctionExpression', FunctionExpression);

import FunctionHead from './auxiliary/FunctionHead';
evaluators.set('FunctionHead', FunctionHead);

import Identifier from './auxiliary/Identifier';
evaluators.set('Identifier', Identifier);

import IfStatement from './statements/IfStatement';
evaluators.set('IfStatement', IfStatement);

import ImportCall from './modules/ImportCall';
evaluators.set('ImportCall', ImportCall);

import ImportDeclaration from './modules/ImportDeclaration';
evaluators.set('ImportDeclaration', ImportDeclaration);

import ImportDefaultSpecifier from './modules/ImportDefaultSpecifier';
evaluators.set('ImportDefaultSpecifier', ImportDefaultSpecifier);

import ImportNamespaceSpecifier from './modules/ImportNamespaceSpecifier';
evaluators.set('ImportNamespaceSpecifier', ImportNamespaceSpecifier);

import ImportSpecifier from './modules/ImportSpecifier';
evaluators.set('ImportSpecifier', ImportSpecifier);

import ImportSpecifierLocal from './modules/ImportSpecifierLocal';
evaluators.set('ImportSpecifierLocal', ImportSpecifierLocal);

import InterpreterDirective from './core/InterpreterDirective';
evaluators.set('InterpreterDirective', InterpreterDirective);

import IntersectionTypeAnnotation from './types/IntersectionTypeAnnotation';
evaluators.set('IntersectionTypeAnnotation', IntersectionTypeAnnotation);

import JSXAttribute from './jsx/JSXAttribute';
evaluators.set('JSXAttribute', JSXAttribute);

import JSXElement from './jsx/JSXElement';
evaluators.set('JSXElement', JSXElement);

import JSXEmptyExpression from './jsx/JSXEmptyExpression';
evaluators.set('JSXEmptyExpression', JSXEmptyExpression);

import JSXExpressionContainer from './jsx/JSXExpressionContainer';
evaluators.set('JSXExpressionContainer', JSXExpressionContainer);

import JSXFragment from './jsx/JSXFragment';
evaluators.set('JSXFragment', JSXFragment);

import JSXIdentifier from './jsx/JSXIdentifier';
evaluators.set('JSXIdentifier', JSXIdentifier);

import JSXMemberExpression from './jsx/JSXMemberExpression';
evaluators.set('JSXMemberExpression', JSXMemberExpression);

import JSXNamespacedName from './jsx/JSXNamespacedName';
evaluators.set('JSXNamespacedName', JSXNamespacedName);

import JSXReferenceIdentifier from './jsx/JSXReferenceIdentifier';
evaluators.set('JSXReferenceIdentifier', JSXReferenceIdentifier);

import JSXSpreadAttribute from './jsx/JSXSpreadAttribute';
evaluators.set('JSXSpreadAttribute', JSXSpreadAttribute);

import JSXSpreadChild from './jsx/JSXSpreadChild';
evaluators.set('JSXSpreadChild', JSXSpreadChild);

import JSXText from './jsx/JSXText';
evaluators.set('JSXText', JSXText);

import LabeledStatement from './statements/LabeledStatement';
evaluators.set('LabeledStatement', LabeledStatement);

import LogicalExpression from './expressions/LogicalExpression';
evaluators.set('LogicalExpression', LogicalExpression);

import MemberExpression from './expressions/MemberExpression';
evaluators.set('MemberExpression', MemberExpression);

import MetaProperty from './expressions/MetaProperty';
evaluators.set('MetaProperty', MetaProperty);

import MixedKeywordTypeAnnotation from './types/MixedKeywordTypeAnnotation';
evaluators.set('MixedKeywordTypeAnnotation', MixedKeywordTypeAnnotation);

import MockParent from './temp/MockParent';
evaluators.set('MockParent', MockParent);

import NeverKeywordTypeAnnotation from './types/NeverKeywordTypeAnnotation';
evaluators.set('NeverKeywordTypeAnnotation', NeverKeywordTypeAnnotation);

import NewExpression from './expressions/NewExpression';
evaluators.set('NewExpression', NewExpression);

import NullKeywordTypeAnnotation from './types/NullKeywordTypeAnnotation';
evaluators.set('NullKeywordTypeAnnotation', NullKeywordTypeAnnotation);

import NullLiteral from './literals/NullLiteral';
evaluators.set('NullLiteral', NullLiteral);

import NumberKeywordTypeAnnotation from './types/NumberKeywordTypeAnnotation';
evaluators.set('NumberKeywordTypeAnnotation', NumberKeywordTypeAnnotation);

import NumericLiteral from './literals/NumericLiteral';
evaluators.set('NumericLiteral', NumericLiteral);

import NumericLiteralTypeAnnotation from './types/NumericLiteralTypeAnnotation';
evaluators.set('NumericLiteralTypeAnnotation', NumericLiteralTypeAnnotation);

import ObjectExpression from './objects/ObjectExpression';
evaluators.set('ObjectExpression', ObjectExpression);

import ObjectKeywordTypeAnnotation from './types/ObjectKeywordTypeAnnotation';
evaluators.set('ObjectKeywordTypeAnnotation', ObjectKeywordTypeAnnotation);

import ObjectMethod from './objects/ObjectMethod';
evaluators.set('ObjectMethod', ObjectMethod);

import ObjectProperty from './objects/ObjectProperty';
evaluators.set('ObjectProperty', ObjectProperty);

import OptionalCallExpression from './expressions/OptionalCallExpression';
evaluators.set('OptionalCallExpression', OptionalCallExpression);

import PatternMeta from './patterns/PatternMeta';
evaluators.set('PatternMeta', PatternMeta);

import PrivateName from './classes/PrivateName';
evaluators.set('PrivateName', PrivateName);

import Program from './core/Program';
evaluators.set('Program', Program);

import ReferenceIdentifier from './expressions/ReferenceIdentifier';
evaluators.set('ReferenceIdentifier', ReferenceIdentifier);

import RegExpAlternation from './regex/RegExpAlternation';
evaluators.set('RegExpAlternation', RegExpAlternation);

import RegExpAnyCharacter from './regex/RegExpAnyCharacter';
evaluators.set('RegExpAnyCharacter', RegExpAnyCharacter);

import RegExpCharacter from './regex/RegExpCharacter';
evaluators.set('RegExpCharacter', RegExpCharacter);

import RegExpCharSet from './regex/RegExpCharSet';
evaluators.set('RegExpCharSet', RegExpCharSet);

import RegExpCharSetRange from './regex/RegExpCharSetRange';
evaluators.set('RegExpCharSetRange', RegExpCharSetRange);

import RegExpControlCharacter from './regex/RegExpControlCharacter';
evaluators.set('RegExpControlCharacter', RegExpControlCharacter);

import RegExpDigitCharacter from './regex/RegExpDigitCharacter';
evaluators.set('RegExpDigitCharacter', RegExpDigitCharacter);

import RegExpEndCharacter from './regex/RegExpEndCharacter';
evaluators.set('RegExpEndCharacter', RegExpEndCharacter);

import RegExpGroupCapture from './regex/RegExpGroupCapture';
evaluators.set('RegExpGroupCapture', RegExpGroupCapture);

import RegExpGroupNonCapture from './regex/RegExpGroupNonCapture';
evaluators.set('RegExpGroupNonCapture', RegExpGroupNonCapture);

import RegExpLiteral from './literals/RegExpLiteral';
evaluators.set('RegExpLiteral', RegExpLiteral);

import RegExpNonDigitCharacter from './regex/RegExpNonDigitCharacter';
evaluators.set('RegExpNonDigitCharacter', RegExpNonDigitCharacter);

import RegExpNonWhiteSpaceCharacter from './regex/RegExpNonWhiteSpaceCharacter';
evaluators.set('RegExpNonWhiteSpaceCharacter', RegExpNonWhiteSpaceCharacter);

import RegExpNonWordBoundaryCharacter from './regex/RegExpNonWordBoundaryCharacter';
evaluators.set('RegExpNonWordBoundaryCharacter', RegExpNonWordBoundaryCharacter);

import RegExpNonWordCharacter from './regex/RegExpNonWordCharacter';
evaluators.set('RegExpNonWordCharacter', RegExpNonWordCharacter);

import RegExpQuantified from './regex/RegExpQuantified';
evaluators.set('RegExpQuantified', RegExpQuantified);

import RegExpStartCharacter from './regex/RegExpStartCharacter';
evaluators.set('RegExpStartCharacter', RegExpStartCharacter);

import RegExpSubExpression from './regex/RegExpSubExpression';
evaluators.set('RegExpSubExpression', RegExpSubExpression);

import RegExpWhiteSpaceCharacter from './regex/RegExpWhiteSpaceCharacter';
evaluators.set('RegExpWhiteSpaceCharacter', RegExpWhiteSpaceCharacter);

import RegExpWordBoundaryCharacter from './regex/RegExpWordBoundaryCharacter';
evaluators.set('RegExpWordBoundaryCharacter', RegExpWordBoundaryCharacter);

import RegExpWordCharacter from './regex/RegExpWordCharacter';
evaluators.set('RegExpWordCharacter', RegExpWordCharacter);

import ReturnStatement from './statements/ReturnStatement';
evaluators.set('ReturnStatement', ReturnStatement);

import SequenceExpression from './expressions/SequenceExpression';
evaluators.set('SequenceExpression', SequenceExpression);

import SpreadElement from './auxiliary/SpreadElement';
evaluators.set('SpreadElement', SpreadElement);

import SpreadProperty from './objects/SpreadProperty';
evaluators.set('SpreadProperty', SpreadProperty);

import StaticMemberProperty from './auxiliary/StaticMemberProperty';
evaluators.set('StaticMemberProperty', StaticMemberProperty);

import StaticPropertyKey from './objects/StaticPropertyKey';
evaluators.set('StaticPropertyKey', StaticPropertyKey);

import StringKeywordTypeAnnotation from './types/StringKeywordTypeAnnotation';
evaluators.set('StringKeywordTypeAnnotation', StringKeywordTypeAnnotation);

import StringLiteral from './literals/StringLiteral';
evaluators.set('StringLiteral', StringLiteral);

import StringLiteralTypeAnnotation from './types/StringLiteralTypeAnnotation';
evaluators.set('StringLiteralTypeAnnotation', StringLiteralTypeAnnotation);

import Super from './expressions/Super';
evaluators.set('Super', Super);

import SwitchCase from './auxiliary/SwitchCase';
evaluators.set('SwitchCase', SwitchCase);

import SwitchStatement from './statements/SwitchStatement';
evaluators.set('SwitchStatement', SwitchStatement);

import SymbolKeywordTypeAnnotation from './types/SymbolKeywordTypeAnnotation';
evaluators.set('SymbolKeywordTypeAnnotation', SymbolKeywordTypeAnnotation);

import TaggedTemplateExpression from './expressions/TaggedTemplateExpression';
evaluators.set('TaggedTemplateExpression', TaggedTemplateExpression);

import TemplateElement from './auxiliary/TemplateElement';
evaluators.set('TemplateElement', TemplateElement);

import TemplateLiteral from './literals/TemplateLiteral';
evaluators.set('TemplateLiteral', TemplateLiteral);

import TemplateLiteralTypeAnnotation from './types/TemplateLiteralTypeAnnotation';
evaluators.set('TemplateLiteralTypeAnnotation', TemplateLiteralTypeAnnotation);

import ThisExpression from './expressions/ThisExpression';
evaluators.set('ThisExpression', ThisExpression);

import ThrowStatement from './statements/ThrowStatement';
evaluators.set('ThrowStatement', ThrowStatement);

import TryStatement from './statements/TryStatement';
evaluators.set('TryStatement', TryStatement);

import TSArrayType from './typescript/TSArrayType';
evaluators.set('TSArrayType', TSArrayType);

import TSAsExpression from './typescript/TSAsExpression';
evaluators.set('TSAsExpression', TSAsExpression);

import TSAssignmentAsExpression from './typescript/TSAssignmentAsExpression';
evaluators.set('TSAssignmentAsExpression', TSAssignmentAsExpression);

import TSAssignmentNonNullExpression from './typescript/TSAssignmentNonNullExpression';
evaluators.set('TSAssignmentNonNullExpression', TSAssignmentNonNullExpression);

import TSAssignmentTypeAssertion from './typescript/TSAssignmentTypeAssertion';
evaluators.set('TSAssignmentTypeAssertion', TSAssignmentTypeAssertion);

import TSCallSignatureDeclaration from './typescript/TSCallSignatureDeclaration';
evaluators.set('TSCallSignatureDeclaration', TSCallSignatureDeclaration);

import TSConditionalType from './typescript/TSConditionalType';
evaluators.set('TSConditionalType', TSConditionalType);

import TSConstructorType from './typescript/TSConstructorType';
evaluators.set('TSConstructorType', TSConstructorType);

import TSConstructSignatureDeclaration from './typescript/TSConstructSignatureDeclaration';
evaluators.set('TSConstructSignatureDeclaration', TSConstructSignatureDeclaration);

import TSDeclareFunction from './typescript/TSDeclareFunction';
evaluators.set('TSDeclareFunction', TSDeclareFunction);

import TSDeclareMethod from './typescript/TSDeclareMethod';
evaluators.set('TSDeclareMethod', TSDeclareMethod);

import TSEnumDeclaration from './typescript/TSEnumDeclaration';
evaluators.set('TSEnumDeclaration', TSEnumDeclaration);

import TSEnumMember from './typescript/TSEnumMember';
evaluators.set('TSEnumMember', TSEnumMember);

import TSExportAssignment from './typescript/TSExportAssignment';
evaluators.set('TSExportAssignment', TSExportAssignment);

import TSExpressionWithTypeArguments from './typescript/TSExpressionWithTypeArguments';
evaluators.set('TSExpressionWithTypeArguments', TSExpressionWithTypeArguments);

import TSExternalModuleReference from './typescript/TSExternalModuleReference';
evaluators.set('TSExternalModuleReference', TSExternalModuleReference);

import TSFunctionType from './typescript/TSFunctionType';
evaluators.set('TSFunctionType', TSFunctionType);

import TSImportEqualsDeclaration from './typescript/TSImportEqualsDeclaration';
evaluators.set('TSImportEqualsDeclaration', TSImportEqualsDeclaration);

import TSImportType from './typescript/TSImportType';
evaluators.set('TSImportType', TSImportType);

import TSIndexedAccessType from './typescript/TSIndexedAccessType';
evaluators.set('TSIndexedAccessType', TSIndexedAccessType);

import TSIndexSignature from './typescript/TSIndexSignature';
evaluators.set('TSIndexSignature', TSIndexSignature);

import TSInferType from './typescript/TSInferType';
evaluators.set('TSInferType', TSInferType);

import TSInterfaceBody from './typescript/TSInterfaceBody';
evaluators.set('TSInterfaceBody', TSInterfaceBody);

import TSInterfaceDeclaration from './typescript/TSInterfaceDeclaration';
evaluators.set('TSInterfaceDeclaration', TSInterfaceDeclaration);

import TSMappedType from './typescript/TSMappedType';
evaluators.set('TSMappedType', TSMappedType);

import TSMethodSignature from './typescript/TSMethodSignature';
evaluators.set('TSMethodSignature', TSMethodSignature);

import TSModuleBlock from './typescript/TSModuleBlock';
evaluators.set('TSModuleBlock', TSModuleBlock);

import TSModuleDeclaration from './typescript/TSModuleDeclaration';
evaluators.set('TSModuleDeclaration', TSModuleDeclaration);

import TSNamespaceExportDeclaration from './typescript/TSNamespaceExportDeclaration';
evaluators.set('TSNamespaceExportDeclaration', TSNamespaceExportDeclaration);

import TSNonNullExpression from './typescript/TSNonNullExpression';
evaluators.set('TSNonNullExpression', TSNonNullExpression);

import TSOptionalType from './typescript/TSOptionalType';
evaluators.set('TSOptionalType', TSOptionalType);

import TSParenthesizedType from './typescript/TSParenthesizedType';
evaluators.set('TSParenthesizedType', TSParenthesizedType);

import TSPropertySignature from './typescript/TSPropertySignature';
evaluators.set('TSPropertySignature', TSPropertySignature);

import TSQualifiedName from './typescript/TSQualifiedName';
evaluators.set('TSQualifiedName', TSQualifiedName);

import TSSignatureDeclarationMeta from './typescript/TSSignatureDeclarationMeta';
evaluators.set('TSSignatureDeclarationMeta', TSSignatureDeclarationMeta);

import TSThisType from './typescript/TSThisType';
evaluators.set('TSThisType', TSThisType);

import TSTupleType from './typescript/TSTupleType';
evaluators.set('TSTupleType', TSTupleType);

import TSTypeAssertion from './typescript/TSTypeAssertion';
evaluators.set('TSTypeAssertion', TSTypeAssertion);

import TSTypeLiteral from './typescript/TSTypeLiteral';
evaluators.set('TSTypeLiteral', TSTypeLiteral);

import TSTypeOperator from './typescript/TSTypeOperator';
evaluators.set('TSTypeOperator', TSTypeOperator);

import TSTypeParameter from './typescript/TSTypeParameter';
evaluators.set('TSTypeParameter', TSTypeParameter);

import TSTypeParameterDeclaration from './typescript/TSTypeParameterDeclaration';
evaluators.set('TSTypeParameterDeclaration', TSTypeParameterDeclaration);

import TSTypeParameterInstantiation from './typescript/TSTypeParameterInstantiation';
evaluators.set('TSTypeParameterInstantiation', TSTypeParameterInstantiation);

import TSTypePredicate from './typescript/TSTypePredicate';
evaluators.set('TSTypePredicate', TSTypePredicate);

import TSTypeQuery from './typescript/TSTypeQuery';
evaluators.set('TSTypeQuery', TSTypeQuery);

import TSTypeReference from './typescript/TSTypeReference';
evaluators.set('TSTypeReference', TSTypeReference);

import TypeAliasTypeAnnotation from './types/TypeAliasTypeAnnotation';
evaluators.set('TypeAliasTypeAnnotation', TypeAliasTypeAnnotation);

import UnaryExpression from './expressions/UnaryExpression';
evaluators.set('UnaryExpression', UnaryExpression);

import UndefinedKeywordTypeAnnotation from './types/UndefinedKeywordTypeAnnotation';
evaluators.set('UndefinedKeywordTypeAnnotation', UndefinedKeywordTypeAnnotation);

import UnionTypeAnnotation from './types/UnionTypeAnnotation';
evaluators.set('UnionTypeAnnotation', UnionTypeAnnotation);

import UnknownKeywordTypeAnnotation from './types/UnknownKeywordTypeAnnotation';
evaluators.set('UnknownKeywordTypeAnnotation', UnknownKeywordTypeAnnotation);

import UpdateExpression from './expressions/UpdateExpression';
evaluators.set('UpdateExpression', UpdateExpression);

import VariableDeclaration from './auxiliary/VariableDeclaration';
evaluators.set('VariableDeclaration', VariableDeclaration);

import VariableDeclarationStatement from './statements/VariableDeclarationStatement';
evaluators.set('VariableDeclarationStatement', VariableDeclarationStatement);

import VariableDeclarator from './auxiliary/VariableDeclarator';
evaluators.set('VariableDeclarator', VariableDeclarator);

import VoidKeywordTypeAnnotation from './types/VoidKeywordTypeAnnotation';
evaluators.set('VoidKeywordTypeAnnotation', VoidKeywordTypeAnnotation);

import WhileStatement from './statements/WhileStatement';
evaluators.set('WhileStatement', WhileStatement);

import WithStatement from './statements/WithStatement';
evaluators.set('WithStatement', WithStatement);

import YieldExpression from './expressions/YieldExpression';
evaluators.set('YieldExpression', YieldExpression);
