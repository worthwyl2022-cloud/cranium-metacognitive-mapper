# Architecture and Design Record

## Repository role

**First-class Cranium Command OS product surface; standalone-capable distribution.** The Mapper is a cognitive-mapping application within the Cranium ecosystem, not a competing authority implementation.

## System boundary

The Mapper owns the conversational cognitive-mapping experience, observation capture, pattern visualization, user review of hypotheses, and adaptation preferences. It consumes cognition/model capability through Convertible Cranium AI/Synapse and, in production, governed continuity through Miracle Memory and authorization through Cranium Kernel.

## Core invariant

**The Mapper can propose cognitive interpretations. It cannot make those interpretations authoritative.** Canonical authority remains with `cranium-kernel`.

## Cognitive loop

`observe -> structure -> interpret -> explain -> question -> user responds -> challenge/reconsider -> update map`

The UI and data model distinguish observed information, interpretations, hypotheses, user-confirmed patterns, and rejected patterns.

## Current prototype evidence

The current build implements conversational capture, deterministic observation tagging, repeated-theme hypothesis generation, user confirmation/rejection, a cognitive map view, a tracker, an explicit observation-mode control, and optional Gemini-backed conversation. Browser localStorage is used for prototype persistence.

## Production boundary

Prototype local state is not canonical memory. Production state must route through governed Cranium memory and Command interfaces, preserve provenance, enforce capability boundaries, and use the canonical Kernel for authority-bearing transitions.

## Safety boundary

Psychological and psychoanalytic explanations are educational. Generated interpretations are not clinical diagnoses and must remain challengeable hypotheses. Cross-application observation requires explicit authorization and must never be represented as silently active when it is not actually connected.

See `COMMAND_OS_INTEGRATION.md` for the complete integration contract.

## Canonicality decision

Canonical status: **Cranium Command OS product surface; `cranium-kernel` remains the sole canonical authority source.**
