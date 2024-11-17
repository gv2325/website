// global.d.ts
interface Window {
    EBWidgets: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete: () => void;
      }) => void;
    };
  }