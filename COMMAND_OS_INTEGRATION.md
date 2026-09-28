# Cranium Command OS Integration

Convertible Cranium Operator OS is a first-class Cranium Command OS product surface. It may be distributed as a standalone-capable application, but it is not an independent authority system.

## Product responsibility

The Mapper observes, organizes, visualizes, and discusses cognitive information supplied by the user or explicitly authorized observation flows. Its job is to help the user build an inspectable model of recurring cognitive patterns.

## Authority boundary

The Mapper may create observations, hypotheses, questions, explanations, and user-confirmed pattern records. It must not grant canonical authority, issue canonical authority receipts, bypass Cranium Kernel, or silently convert an inference into durable canonical state.

Canonical authority remains with `cranium-kernel` inside Cranium Command OS.

## Governed relationships

- **Cranium Command OS:** product host, ecosystem identity, policy, lifecycle, capability boundary.
- **Cranium Kernel:** sole canonical authority source.
- **Miracle Memory:** governed durable continuity for production Mapper state. Local storage in this prototype is temporary product state, not canonical memory.
- **Cognitive Subconscious:** bounded workspace for observations, associations, hypotheses, contradictions, and candidate interpretations before authority.
- **Synapse:** provider/model/tool capability plane. External model output is cognition/proposal, never authority by itself.
- **COMA:** containment and recovery boundary for unsafe, contradictory, stale, or quarantined Mapper state.

## Cognitive loop

`observe -> structure -> interpret -> explain -> question -> user responds -> challenge/reconsider -> update map`

The system must preserve the distinction between:

1. **Observed:** directly reported or explicitly captured information.
2. **Interpreted:** a model-generated reading of observations.
3. **Hypothesized:** a proposed recurring relationship awaiting evidence or user review.
4. **Confirmed:** a pattern the user explicitly accepts as useful.
5. **Rejected:** a pattern the user rejects and which must not silently reappear as established fact.

## Privacy and observation

Cross-application or browsing observation requires explicit user authorization and a visible observation state. The Mapper must not imply that it can silently monitor other applications when that capability is not actually connected.

## Cognitive adaptation

Adaptation is user-controlled, visible, reversible, and scoped to communication behavior. It must not silently redefine identity, create clinical conclusions, or become an authority source.

## Psychology boundary

Psychological and psychoanalytic material is educational unless a qualified external clinical workflow is explicitly integrated. AI-generated interpretations are hypotheses and must be presented with evidence and uncertainty.

## Production migration

The current prototype uses browser-local storage and lightweight deterministic tagging. Production integration should replace those pieces with governed Memory/Command interfaces, signed identity/capability checks, receipt-linked state transitions, provenance, export/delete controls, and Kernel-mediated actions where actions cross the authority boundary.
